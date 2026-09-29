"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import * as THREE from "three";
import { MASCOT_CONFIG as CFG } from "../data/mascotConfig";
import { buildMascotRig } from "../engine/mascotMeshBuilder";
import { initMascotPhysicsState, triggerMascotBounce, updateMascotPhysics } from "../engine/mascotPhysics";
import { MascotPhysicsState, PointerTarget } from "../engine/types";
import MascotHUDOverlay from "./MascotHUDOverlay";

export default function MascotCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const physicsStateRef = useRef<MascotPhysicsState>(initMascotPhysicsState());
  const [pointer, setPointer] = useState<PointerTarget>({
    normalizedX: 0,
    normalizedY: 0,
    active: false,
  });
  const [isInteracting, setIsInteracting] = useState(false);
  const [webGLError, setWebGLError] = useState(false);

  const handlePetClick = useCallback(() => {
    triggerMascotBounce(physicsStateRef.current);
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 700);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animId: number;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    physicsStateRef.current = initMascotPhysicsState(prefersReducedMotion);

    // ── Three.js Scene Setup ──
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      CFG.camera.fov,
      container.clientWidth / Math.max(1, container.clientHeight),
      CFG.camera.near,
      CFG.camera.far
    );

    const updateCameraPos = () => {
      const w = window.innerWidth;
      if (w < 640) {
        camera.position.set(...CFG.camera.mobilePos);
        camera.fov = 42;
      } else if (w < 1024) {
        camera.position.set(...CFG.camera.tabletPos);
        camera.fov = 36;
      } else {
        camera.position.set(...CFG.camera.desktopPos);
        camera.fov = CFG.camera.fov;
      }
      camera.lookAt(new THREE.Vector3(...CFG.camera.target));
      camera.updateProjectionMatrix();
    };
    updateCameraPos();

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    } catch (e) {
      console.warn("Failed to initialize WebGLRenderer:", e);
      setTimeout(() => setWebGLError(true), 0);
      return;
    }

    // ── Lighting Setup ──
    const ambientLight = new THREE.AmbientLight(CFG.colors.ambientLight, CFG.lighting.ambientIntensity);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(CFG.colors.keyLight, CFG.lighting.keyLightIntensity);
    keyLight.position.set(...CFG.lighting.keyLightPos);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(CFG.colors.fillLight, CFG.lighting.fillLightIntensity);
    fillLight.position.set(...CFG.lighting.fillLightPos);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(CFG.colors.rimLight, CFG.lighting.rimLightIntensity);
    rimLight.position.set(...CFG.lighting.rimLightPos);
    scene.add(rimLight);

    const bottomLight = new THREE.DirectionalLight(0xffffff, CFG.lighting.bottomBounceIntensity);
    bottomLight.position.set(...CFG.lighting.bottomBouncePos);
    scene.add(bottomLight);

    // ── Build Mascot Rig ──
    const rig = buildMascotRig();
    scene.add(rig.rootGroup);

    // ── Resize Handler ──
    const onResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = Math.max(1, container.clientHeight);
      camera.aspect = w / h;
      updateCameraPos();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ── Pointer Tracking Across Window ──
    const currentPointer: PointerTarget = { normalizedX: 0, normalizedY: 0, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const mascotCenterX = rect.left + rect.width / 2;
      const mascotCenterY = rect.top + rect.height * 0.42;

      // Calculate direction relative to mascot's position on screen
      const dx = (e.clientX - mascotCenterX) / Math.max(120, window.innerWidth * 0.35);
      const dy = (e.clientY - mascotCenterY) / Math.max(120, window.innerHeight * 0.35);

      currentPointer.normalizedX = Math.max(-1, Math.min(1, dx));
      currentPointer.normalizedY = -Math.max(-1, Math.min(1, dy)); // positive is looking up
      currentPointer.active = true;
      setPointer({ ...currentPointer });
    };

    const handleMouseLeaveWindow = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        currentPointer.active = false;
        setPointer({ ...currentPointer });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0 && container) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const mascotCenterX = rect.left + rect.width / 2;
        const mascotCenterY = rect.top + rect.height * 0.42;

        const dx = (touch.clientX - mascotCenterX) / Math.max(160, window.innerWidth * 0.45);
        const dy = (touch.clientY - mascotCenterY) / Math.max(160, window.innerHeight * 0.45);

        currentPointer.normalizedX = Math.max(-1, Math.min(1, dx));
        currentPointer.normalizedY = -Math.max(-1, Math.min(1, dy));
        currentPointer.active = true;
        setPointer({ ...currentPointer });
      }
    };

    const handleTouchEnd = () => {
      currentPointer.active = false;
      setPointer({ ...currentPointer });
    };

    const handleCanvasClick = () => {
      handlePetClick();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("click", handleCanvasClick);

    // ── Animation Loop ──
    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Update physics and bone rig
      updateMascotPhysics(
        rig,
        physicsStateRef.current,
        currentPointer,
        dt,
        prefersReducedMotion
      );

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("click", handleCanvasClick);

      // Clean dispose
      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => mat.dispose());
          } else if (mesh.material) {
            mesh.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [handlePetClick]);

  if (webGLError) {
    return (
      <div className="relative w-full h-full min-h-[380px] flex items-center justify-center p-8 bg-jlug-black/50 border border-jlug-line">
        <div className="flex flex-col items-center text-center gap-4">
          <Image
            src="/assets/mascot/pingu-tiwari.png"
            alt="Pingu Tiwari Mascot"
            width={160}
            height={160}
            className="w-40 h-auto object-contain animate-bounce"
          />
          <div className="font-mono text-xs text-jlug-gray-1">
            [ WEBGL_FALLBACK_ACTIVE // PINGU_TIWARI ]
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[360px] md:min-h-[480px] lg:min-h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden group"
      role="region"
      aria-label="Interactive 3D Mascot Pingu Tiwari"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      <MascotHUDOverlay
        pointer={pointer}
        isInteracting={isInteracting}
        onPetClick={handlePetClick}
      />
    </div>
  );
}
