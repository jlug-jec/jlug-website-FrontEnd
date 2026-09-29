import * as THREE from "three";
import { MASCOT_CONFIG as CFG } from "../data/mascotConfig";
import { createEyeTexture, createShadowTexture, createCrestTexture } from "./mascotTextures";
import { MascotRig } from "./types";

/**
 * Builds the complete procedural 3D Pingu Tiwari character hierarchy.
 * All geometry, materials, pivots, and textures are configured to match
 * the turnaround reference image with clean PBR shading.
 */
export function buildMascotRig(): MascotRig {
  const rootGroup = new THREE.Group();
  rootGroup.name = "PinguTiwari_Root";
  rootGroup.scale.set(0.85, 0.85, 0.85);

  // ── Materials ──
  const bodyMaterial = new THREE.MeshPhysicalMaterial({
    color: CFG.colors.bodyDark,
    roughness: CFG.materials.bodyRoughness,
    metalness: CFG.materials.bodyMetalness,
    clearcoat: CFG.materials.bodyClearcoat,
    clearcoatRoughness: CFG.materials.bodyClearcoatRoughness,
    reflectivity: 0.5,
  });

  const bellyMaterial = new THREE.MeshStandardMaterial({
    color: CFG.colors.bellyWhite,
    roughness: CFG.materials.bellyRoughness,
    metalness: CFG.materials.bellyMetalness,
  });

  const beakMaterial = new THREE.MeshStandardMaterial({
    color: CFG.colors.beakOrange,
    roughness: CFG.materials.beakRoughness,
    metalness: CFG.materials.beakMetalness,
  });

  const feetMaterial = new THREE.MeshStandardMaterial({
    color: CFG.colors.feetOrange,
    roughness: CFG.materials.feetRoughness,
    metalness: CFG.materials.feetMetalness,
  });

  // ── 1. Body & Torso ──
  const bodyGroup = new THREE.Group();
  bodyGroup.name = "BodyGroup";
  rootGroup.add(bodyGroup);

  // Lathe curve for smooth continuous penguin body silhouette
  const rawPoints: THREE.Vector2[] = [];
  // Base to crown profile
  const profileCoords = [
    [0.0, 0.2],
    [0.55, 0.24],
    [0.92, 0.38],
    [1.15, 0.72],
    [1.18, 1.15],
    [1.08, 1.55],
    [0.92, 1.85], // neck transition
    [0.96, 2.2],  // head bulge
    [0.92, 2.65], // head dome
    [0.68, 2.98],
    [0.32, 3.14],
    [0.0, 3.18],  // crown apex
  ];

  for (const [r, y] of profileCoords) {
    rawPoints.push(new THREE.Vector2(r, y));
  }
  
  const spline = new THREE.SplineCurve(rawPoints);
  const bodyPoints = spline.getPoints(64);

  const bodyGeo = new THREE.LatheGeometry(bodyPoints, 48);
  bodyGeo.computeVertexNormals();
  const bodyMesh = new THREE.Mesh(bodyGeo, bodyMaterial);
  bodyMesh.castShadow = true;
  bodyMesh.receiveShadow = true;
  bodyGroup.add(bodyMesh);

  // ── 2. White Belly Oval Shell ──
  // Modeled as a smooth curved anterior patch nestled into the body
  const bellyGeo = new THREE.SphereGeometry(1.0, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.55);
  const bellyMesh = new THREE.Mesh(bellyGeo, bellyMaterial);
  bellyMesh.scale.set(0.92, 0.96, 0.70);
  bellyMesh.position.set(0, 1.05, 0.62);
  bellyMesh.rotation.x = 0.08;
  bodyGroup.add(bellyMesh);

  // ── 3. Head & Facial Features Group (Pivots at neck height: y=1.85) ──
  const headGroup = new THREE.Group();
  headGroup.name = "HeadGroup";
  headGroup.position.set(0, 1.85, 0);
  rootGroup.add(headGroup);

  // ── 3a. Beak ──
  const beakGroup = new THREE.Group();
  beakGroup.name = "BeakGroup";
  beakGroup.position.set(0, 0.22, 1.02);
  beakGroup.rotation.x = -0.06;

  // Upper beak: curved triangular shape with soft bridge
  const upperBeakGeo = new THREE.ConeGeometry(0.32, 0.58, 32);
  upperBeakGeo.rotateX(Math.PI / 2);
  upperBeakGeo.scale(1.15, 0.85, 1.0);
  const upperBeakMesh = new THREE.Mesh(upperBeakGeo, beakMaterial);
  upperBeakMesh.position.set(0, 0.04, 0.18);
  beakGroup.add(upperBeakMesh);

  // Lower beak: slightly smaller supportive jaw
  const lowerBeakGeo = new THREE.ConeGeometry(0.24, 0.42, 32);
  lowerBeakGeo.rotateX(Math.PI / 2);
  lowerBeakGeo.scale(0.95, 0.45, 0.85);
  const lowerBeakMesh = new THREE.Mesh(lowerBeakGeo, beakMaterial);
  lowerBeakMesh.position.set(0, -0.08, 0.12);
  beakGroup.add(lowerBeakMesh);

  headGroup.add(beakGroup);

  // ── 3b. Articulated Eyeballs (Glossy Sclera Spheres with Front Iris) ──
  const scleraMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.15,
    metalness: 0.0,
  });

  const irisTex = createEyeTexture();
  const irisMat = new THREE.MeshBasicMaterial({
    map: irisTex,
    transparent: true,
    alphaTest: 0.01,
    side: THREE.DoubleSide,
  });

  const scleraGeo = new THREE.SphereGeometry(0.26, 32, 24);
  const irisPlaneGeo = new THREE.PlaneGeometry(0.42, 0.42);

  // Left Eyeball Group
  const eyeLeftGroup = new THREE.Group();
  eyeLeftGroup.name = "EyeLeftGroup";
  eyeLeftGroup.position.set(-0.38, 0.38, 0.96);
  eyeLeftGroup.rotation.y = -0.12;
  eyeLeftGroup.rotation.x = -0.04;

  const scleraLeftMesh = new THREE.Mesh(scleraGeo, scleraMat);
  eyeLeftGroup.add(scleraLeftMesh);

  const pupilLeftGroup = new THREE.Group();
  pupilLeftGroup.name = "PupilLeftGroup";
  const pupilLeftMesh = new THREE.Mesh(irisPlaneGeo, irisMat);
  pupilLeftMesh.position.set(0, 0, 0.262);
  pupilLeftGroup.add(pupilLeftMesh);
  eyeLeftGroup.add(pupilLeftGroup);

  headGroup.add(eyeLeftGroup);

  // Right Eyeball Group
  const eyeRightGroup = new THREE.Group();
  eyeRightGroup.name = "EyeRightGroup";
  eyeRightGroup.position.set(0.38, 0.38, 0.96);
  eyeRightGroup.rotation.y = 0.12;
  eyeRightGroup.rotation.x = -0.04;

  const scleraRightMesh = new THREE.Mesh(scleraGeo, scleraMat);
  eyeRightGroup.add(scleraRightMesh);

  const pupilRightGroup = new THREE.Group();
  pupilRightGroup.name = "PupilRightGroup";
  const pupilRightMesh = new THREE.Mesh(irisPlaneGeo, irisMat);
  pupilRightMesh.position.set(0, 0, 0.262);
  pupilRightGroup.add(pupilRightMesh);
  eyeRightGroup.add(pupilRightGroup);

  headGroup.add(eyeRightGroup);

  // Dummy cornea references for type compatibility
  const dummyCorneaGeo = new THREE.SphereGeometry(0.01, 8, 8);
  const eyeLeftCornea = new THREE.Mesh(dummyCorneaGeo, scleraMat);
  const eyeRightCornea = new THREE.Mesh(dummyCorneaGeo, scleraMat);
  eyeLeftCornea.visible = false;
  eyeRightCornea.visible = false;

  // ── 3c. Golden Feather Crests (Left & Right temporal streaks) ──
  const crestTexLeft = createCrestTexture(false);
  const crestTexRight = createCrestTexture(true);

  const crestPlaneGeo = new THREE.PlaneGeometry(0.72, 0.62);

  const crestMatLeft = new THREE.MeshStandardMaterial({
    map: crestTexLeft,
    transparent: true,
    alphaTest: 0.02,
    roughness: 0.25,
    metalness: 0.15,
    side: THREE.DoubleSide,
  });

  const crestMeshLeft = new THREE.Mesh(crestPlaneGeo, crestMatLeft);
  crestMeshLeft.position.set(-0.82, 0.42, 0.24);
  crestMeshLeft.rotation.y = -Math.PI / 2 + 0.22;
  crestMeshLeft.rotation.x = 0.12;
  crestMeshLeft.rotation.z = -0.15;
  headGroup.add(crestMeshLeft);

  const crestMatRight = new THREE.MeshStandardMaterial({
    map: crestTexRight,
    transparent: true,
    alphaTest: 0.02,
    roughness: 0.25,
    metalness: 0.15,
    side: THREE.DoubleSide,
  });

  const crestMeshRight = new THREE.Mesh(crestPlaneGeo, crestMatRight);
  crestMeshRight.position.set(0.82, 0.42, 0.24);
  crestMeshRight.rotation.y = Math.PI / 2 - 0.22;
  crestMeshRight.rotation.x = 0.12;
  crestMeshRight.rotation.z = 0.15;
  headGroup.add(crestMeshRight);

  // ── 4. Flippers (Wings) ──
  // Modeled with curved organic teardrop mesh with shoulder pivot
  const createFlipperMesh = () => {
    const geo = new THREE.CapsuleGeometry(0.24, 1.25, 16, 24);
    // Flatten sideways
    geo.scale(0.48, 1.0, 0.95);
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, bodyMaterial);
    mesh.castShadow = true;
    mesh.position.set(0, -0.65, 0); // offset from pivot
    mesh.rotation.x = 0.12;
    return mesh;
  };

  // Left Flipper
  const flipperLeft = new THREE.Group();
  flipperLeft.name = "FlipperLeft";
  flipperLeft.position.set(-1.14, 1.55, 0.05);
  flipperLeft.rotation.z = 0.22; // resting outward angle
  flipperLeft.rotation.y = 0.15;
  flipperLeft.add(createFlipperMesh());
  bodyGroup.add(flipperLeft);

  // Right Flipper
  const flipperRight = new THREE.Group();
  flipperRight.name = "FlipperRight";
  flipperRight.position.set(1.14, 1.55, 0.05);
  flipperRight.rotation.z = -0.22;
  flipperRight.rotation.y = -0.15;
  flipperRight.add(createFlipperMesh());
  bodyGroup.add(flipperRight);

  // ── 5. Feet (3-lobed webbed cute penguin feet) ──
  const createFoot = (isLeft: boolean) => {
    const footGroup = new THREE.Group();
    // Central foot base (smooth oval instead of a sharp box)
    const baseGeo = new THREE.SphereGeometry(0.28, 32, 16);
    const baseMesh = new THREE.Mesh(baseGeo, feetMaterial);
    baseMesh.scale.set(1.1, 0.35, 1.4);
    baseMesh.position.set(0, 0.08, 0.18);
    footGroup.add(baseMesh);

    // 3 Rounded forward toe lobes (spherical instead of sharp cylinders)
    const toeGeo = new THREE.SphereGeometry(0.12, 24, 16);
    
    const toeCenter = new THREE.Mesh(toeGeo, feetMaterial);
    toeCenter.scale.set(1.0, 0.8, 1.5);
    toeCenter.position.set(0, 0.06, 0.52);
    footGroup.add(toeCenter);

    const toeLeft = new THREE.Mesh(toeGeo, feetMaterial);
    toeLeft.scale.set(1.0, 0.8, 1.5);
    toeLeft.position.set(-0.2, 0.06, 0.46);
    toeLeft.rotation.y = -0.25;
    footGroup.add(toeLeft);

    const toeRight = new THREE.Mesh(toeGeo, feetMaterial);
    toeRight.scale.set(1.0, 0.8, 1.5);
    toeRight.position.set(0.2, 0.06, 0.46);
    toeRight.rotation.y = 0.25;
    footGroup.add(toeRight);

    footGroup.position.set(isLeft ? -0.46 : 0.46, 0.0, 0.15);
    footGroup.rotation.y = isLeft ? -0.18 : 0.18; // outward splay
    return footGroup;
  };

  const footLeft = createFoot(true);
  footLeft.name = "FootLeft";
  bodyGroup.add(footLeft);

  const footRight = createFoot(false);
  footRight.name = "FootRight";
  bodyGroup.add(footRight);

  // ── 6. Tail ──
  const tailGroup = new THREE.Group();
  tailGroup.name = "TailGroup";
  const tailGeo = new THREE.ConeGeometry(0.38, 0.65, 16);
  tailGeo.rotateX(-Math.PI / 2.3);
  tailGeo.scale(1.2, 0.45, 1.0);
  const tailMesh = new THREE.Mesh(tailGeo, bodyMaterial);
  tailMesh.position.set(0, 0.48, -0.92);
  tailGroup.add(tailMesh);
  bodyGroup.add(tailGroup);

  // ── 7. Soft Ground Contact Shadow Plane ──
  const shadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
  shadowGeo.rotateX(-Math.PI / 2);
  const shadowTex = createShadowTexture();
  const shadowMat = new THREE.MeshBasicMaterial({
    map: shadowTex,
    transparent: true,
    opacity: 0.75,
    depthWrite: false,
  });
  const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
  shadowMesh.position.set(0, 0.015, 0.1);
  rootGroup.add(shadowMesh);

  return {
    rootGroup,
    bodyGroup,
    headGroup,
    bellyMesh,
    beakGroup,
    eyeLeftGroup,
    eyeRightGroup,
    pupilLeftGroup,
    pupilRightGroup,
    eyeLeftCornea,
    eyeRightCornea,
    eyeLeftPupil: pupilLeftMesh,
    eyeRightPupil: pupilRightMesh,
    flipperLeft,
    flipperRight,
    footLeft,
    footRight,
    tailGroup,
    shadowMesh,
  };
}
