import * as THREE from "three";
import { MASCOT_CONFIG as CFG } from "../data/mascotConfig";
import { MascotPhysicsState, MascotRig, PointerTarget } from "./types";

/**
 * Initializes the mascot physics and animation state.
 */
export function initMascotPhysicsState(reducedMotion: boolean = false): MascotPhysicsState {
  return {
    currentHeadYaw: 0,
    currentHeadPitch: 0,
    currentHeadRoll: 0,
    targetHeadYaw: 0,
    targetHeadPitch: 0,
    targetHeadRoll: 0,

    currentBodyYaw: 0,
    currentBodyPitch: 0,
    currentBodyRoll: 0,
    targetBodyYaw: 0,
    targetBodyPitch: 0,
    targetBodyRoll: 0,

    currentBodyY: 0,
    targetBodyY: 0,
    bodyVelocityY: 0,

    bounceOffsetY: 0,
    bounceVelocityY: 0,
    bounceScaleX: 1,
    bounceScaleY: 1,

    currentEyeYaw: 0,
    currentEyePitch: 0,
    targetEyeYaw: 0,
    targetEyePitch: 0,

    isBlinking: false,
    blinkProgress: 0,
    nextBlinkTime: CFG.physics.blinkIntervalMin + Math.random() * 2,

    idlePhase: 0,
    isPointerActive: false,
    reducedMotion,
  };
}

/**
 * Triggers a spring bounce / jiggle when the user clicks or taps on the mascot.
 */
export function triggerMascotBounce(state: MascotPhysicsState): void {
  state.bounceVelocityY = CFG.physics.clickBounceImpulse;
  state.bounceScaleY = 0.96;
  state.bounceScaleX = 1.03;
}

/**
 * Updates physics, springs, idle breathing, look-at targeting, blinking, and applies to 3D rig.
 */
export function updateMascotPhysics(
  rig: MascotRig,
  state: MascotPhysicsState,
  pointer: PointerTarget,
  deltaSec: number,
  reducedMotion: boolean
): void {
  state.reducedMotion = reducedMotion;
  state.isPointerActive = pointer.active;

  // Clamp dt to avoid huge jumps on tab switch
  const dt = Math.min(deltaSec, 0.064);

  // ── 1. Target Look-At from Pointer ──
  if (pointer.active && !reducedMotion) {
    // Eyeballs have wide, agile gaze tracking:
    state.targetEyeYaw = pointer.normalizedX * 0.72; // up to ±41 deg
    state.targetEyePitch = pointer.normalizedY * 0.48; // up to ±28 deg

    // Head follows with smooth moderate angle:
    state.targetHeadYaw = pointer.normalizedX * 0.32;
    state.targetHeadPitch = -pointer.normalizedY * 0.2;
    state.targetHeadRoll = pointer.normalizedX * 0.08;

    // Body follows with subtle angle:
    state.targetBodyYaw = pointer.normalizedX * 0.16;
    state.targetBodyPitch = -pointer.normalizedY * 0.1;
    state.targetBodyRoll = pointer.normalizedX * 0.04;
  } else {
    // Gentle ambient sway when idle
    const t = state.idlePhase;
    state.targetEyeYaw = Math.sin(t * 0.5) * 0.08;
    state.targetEyePitch = Math.cos(t * 0.7) * 0.05;

    state.targetHeadYaw = Math.sin(t * 0.6) * 0.06;
    state.targetHeadPitch = Math.cos(t * 0.8) * 0.03;
    state.targetHeadRoll = Math.sin(t * 0.5) * 0.02;

    state.targetBodyYaw = Math.sin(t * 0.4) * 0.03;
    state.targetBodyPitch = 0;
    state.targetBodyRoll = Math.sin(t * 0.3) * 0.015;
  }

  // ── 2. Smoothing ──
  // Fast & agile for eyeballs:
  const eyeEase = reducedMotion ? 1 : 1 - Math.pow(1 - 0.28, dt * 60);
  state.currentEyeYaw += (state.targetEyeYaw - state.currentEyeYaw) * eyeEase;
  state.currentEyePitch += (state.targetEyePitch - state.currentEyePitch) * eyeEase;

  // Spring smoothing for head & body:
  const ease = reducedMotion ? 1 : 1 - Math.pow(1 - CFG.physics.lookAtStiffness, dt * 60);
  state.currentHeadYaw += (state.targetHeadYaw - state.currentHeadYaw) * ease;
  state.currentHeadPitch += (state.targetHeadPitch - state.currentHeadPitch) * ease;
  state.currentHeadRoll += (state.targetHeadRoll - state.currentHeadRoll) * ease;

  state.currentBodyYaw += (state.targetBodyYaw - state.currentBodyYaw) * ease;
  state.currentBodyPitch += (state.targetBodyPitch - state.currentBodyPitch) * ease;
  state.currentBodyRoll += (state.targetBodyRoll - state.currentBodyRoll) * ease;

  // ── 3. Idle Breathing Oscillator ──
  if (!reducedMotion) {
    state.idlePhase += dt * CFG.physics.breathingFrequency;
  }
  const breathingOffset = reducedMotion ? 0 : Math.sin(state.idlePhase) * CFG.physics.breathingAmplitudeY;
  const breathingScale = reducedMotion ? 1 : 1 + Math.sin(state.idlePhase) * CFG.physics.breathingScaleY;

  // ── 4. Spring Bounce Mechanics (Click reaction) ──
  if (Math.abs(state.bounceVelocityY) > 0.001 || Math.abs(state.bounceOffsetY) > 0.001) {
    const k = CFG.physics.bounceStiffness;
    const damp = CFG.physics.bounceDamping;
    const force = -k * state.bounceOffsetY;
    state.bounceVelocityY = (state.bounceVelocityY + force) * damp;
    state.bounceOffsetY += state.bounceVelocityY;

    // Dynamic squash & stretch
    state.bounceScaleY += (1 + state.bounceOffsetY * 1.2 - state.bounceScaleY) * 0.2;
    state.bounceScaleX += (1 - state.bounceOffsetY * 0.6 - state.bounceScaleX) * 0.2;
  } else {
    state.bounceOffsetY = 0;
    state.bounceVelocityY = 0;
    state.bounceScaleY = 1;
    state.bounceScaleX = 1;
  }

  // ── 5. Blinking Cycle ──
  if (!reducedMotion) {
    state.nextBlinkTime -= dt;
    if (state.nextBlinkTime <= 0 && !state.isBlinking) {
      state.isBlinking = true;
      state.blinkProgress = 0;
    }

    if (state.isBlinking) {
      state.blinkProgress += dt / CFG.physics.blinkDuration;
      if (state.blinkProgress >= 1) {
        state.isBlinking = false;
        state.blinkProgress = 0;
        state.nextBlinkTime =
          CFG.physics.blinkIntervalMin +
          Math.random() * (CFG.physics.blinkIntervalMax - CFG.physics.blinkIntervalMin);
      }
    }
  }

  const blinkScaleY = state.isBlinking ? Math.sin(state.blinkProgress * Math.PI) : 0;
  const currentEyeScaleY = 1 - blinkScaleY * 0.88;

  // ── 6. Apply to Rig ──
  const totalY = breathingOffset + state.bounceOffsetY;

  // Body group transforms
  rig.bodyGroup.position.y = totalY;
  rig.bodyGroup.rotation.y = state.currentBodyYaw;
  rig.bodyGroup.rotation.x = state.currentBodyPitch;
  rig.bodyGroup.rotation.z = state.currentBodyRoll;
  rig.bodyGroup.scale.set(
    state.bounceScaleX,
    breathingScale * state.bounceScaleY,
    state.bounceScaleX
  );

  // Head group transforms
  rig.headGroup.position.y = 1.85 + totalY * 0.85;
  rig.headGroup.rotation.y = state.currentHeadYaw;
  rig.headGroup.rotation.x = state.currentHeadPitch;
  rig.headGroup.rotation.z = state.currentHeadRoll;

  // Flipper idle motion + slight spread with breath
  const flipperSway = reducedMotion ? 0 : Math.sin(state.idlePhase * 0.8) * CFG.physics.flipperIdleSway;
  rig.flipperLeft.rotation.z = 0.22 + flipperSway;
  rig.flipperRight.rotation.z = -0.22 - flipperSway;

  // Rotate Left and Right Eyeballs to track the cursor
  rig.eyeLeftGroup.rotation.y = -0.12 + state.currentEyeYaw;
  rig.eyeLeftGroup.rotation.x = -0.04 - state.currentEyePitch;

  rig.eyeRightGroup.rotation.y = 0.12 + state.currentEyeYaw;
  rig.eyeRightGroup.rotation.x = -0.04 - state.currentEyePitch;

  // Pupil micro-shift and blink scaling
  rig.eyeLeftPupil.scale.y = currentEyeScaleY;
  rig.eyeRightPupil.scale.y = currentEyeScaleY;
  rig.eyeLeftPupil.position.x = state.currentEyeYaw * 0.05;
  rig.eyeLeftPupil.position.y = state.currentEyePitch * 0.04;
  rig.eyeRightPupil.position.x = state.currentEyeYaw * 0.05;
  rig.eyeRightPupil.position.y = state.currentEyePitch * 0.04;

  // Contact shadow scale with jump/bounce
  const shadowScale = 1 / Math.max(0.75, 1 + totalY * 0.8);
  rig.shadowMesh.scale.set(shadowScale, shadowScale, shadowScale);
  (rig.shadowMesh.material as THREE.MeshBasicMaterial).opacity = 0.75 * shadowScale;
}
