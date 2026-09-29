import * as THREE from "three";

export interface MascotRig {
  rootGroup: THREE.Group;
  bodyGroup: THREE.Group;
  headGroup: THREE.Group;
  bellyMesh: THREE.Mesh;
  beakGroup: THREE.Group;
  eyeLeftGroup: THREE.Group;
  eyeRightGroup: THREE.Group;
  pupilLeftGroup: THREE.Group;
  pupilRightGroup: THREE.Group;
  eyeLeftCornea: THREE.Mesh;
  eyeRightCornea: THREE.Mesh;
  eyeLeftPupil: THREE.Mesh;
  eyeRightPupil: THREE.Mesh;
  flipperLeft: THREE.Group;
  flipperRight: THREE.Group;
  footLeft: THREE.Group;
  footRight: THREE.Group;
  tailGroup: THREE.Group;
  shadowMesh: THREE.Mesh;
}

export interface MascotPhysicsState {
  currentHeadYaw: number;
  currentHeadPitch: number;
  currentHeadRoll: number;
  targetHeadYaw: number;
  targetHeadPitch: number;
  targetHeadRoll: number;

  currentBodyYaw: number;
  currentBodyPitch: number;
  currentBodyRoll: number;
  targetBodyYaw: number;
  targetBodyPitch: number;
  targetBodyRoll: number;

  currentBodyY: number;
  targetBodyY: number;
  bodyVelocityY: number;

  bounceOffsetY: number;
  bounceVelocityY: number;
  bounceScaleX: number;
  bounceScaleY: number;

  // Eye gaze tracking
  currentEyeYaw: number;
  currentEyePitch: number;
  targetEyeYaw: number;
  targetEyePitch: number;

  // Blink state
  isBlinking: boolean;
  blinkProgress: number;
  nextBlinkTime: number;

  // Timing
  idlePhase: number;
  isPointerActive: boolean;
  reducedMotion: boolean;
}

export interface PointerTarget {
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
  active: boolean;
}

export interface MascotHUDState {
  coordinates: { x: number; y: number };
  status: "ONLINE" | "INTERACTING" | "IDLE" | "PETTING";
  fps: number;
  eyeFocus: string;
}
