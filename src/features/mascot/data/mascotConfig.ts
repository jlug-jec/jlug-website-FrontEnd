/**
 * Centralized configuration for 3D Pingu Tiwari Mascot.
 * Adheres to JLUG core rule: No magic numbers scattered across components.
 */

export const MASCOT_CONFIG = {
  // ── Colors ──
  colors: {
    bodyDark: 0x1d222a, // Charcoal slate-blue body matching reference
    bodyDarkHex: "#1d222a",
    bodyGloss: 0x272e3a,
    bellyWhite: 0xf4f6f8, // Matte soft white belly
    crestGold: 0xf5b82e, // Golden crest feathers
    beakOrange: 0xf09f28, // Beak primary
    beakDarkOrange: 0xd98616, // Beak lip line / mouth shadow
    feetOrange: 0xea9d26, // Feet webbed orange
    eyeWhite: 0xffffff,
    eyeIris: 0x241810, // Dark espresso brown
    eyeIrisRing: 0x4a3220, // Warm amber transition
    eyePupil: 0x07080a, // Deep black pupil
    eyeSpecular: 0xffffff,
    groundShadow: 0x050505,
    ambientLight: 0xffffff,
    keyLight: 0xfffaed,
    fillLight: 0xd6e5ff,
    rimLight: 0xb7f34a, // Subtle JLUG accent rim light
  },

  // ── Material PBR Settings ──
  materials: {
    bodyRoughness: 0.32,
    bodyMetalness: 0.05,
    bodyClearcoat: 0.25,
    bodyClearcoatRoughness: 0.2,

    bellyRoughness: 0.45,
    bellyMetalness: 0.0,

    crestRoughness: 0.28,
    crestMetalness: 0.15,

    beakRoughness: 0.35,
    beakMetalness: 0.05,

    feetRoughness: 0.4,
    feetMetalness: 0.02,

    eyeCorneaRoughness: 0.05,
    eyeCorneaMetalness: 0.1,
  },

  // ── 3D Anatomy Proportions (relative units) ──
  proportions: {
    bodyHeight: 3.4,
    bodyRadius: 1.15,
    headRadius: 0.98,
    neckTaper: 0.92,
    bellyWidth: 1.25,
    bellyHeight: 1.85,
    bellyDepthOffset: 0.65,
    beakLength: 0.68,
    beakWidth: 0.62,
    beakHeight: 0.38,
    flipperLength: 1.75,
    flipperWidth: 0.52,
    flipperThickness: 0.22,
    footLength: 0.88,
    footWidth: 0.72,
    footHeight: 0.22,
    tailLength: 0.58,
    tailWidth: 0.48,
    eyeRadius: 0.24,
    eyeSpacing: 0.58,
    eyeHeight: 1.98,
    eyeDepth: 0.86,
  },

  // ── Physics & Interaction ──
  physics: {
    // Spring dynamics for smooth look-at
    lookAtStiffness: 0.1,
    lookAtDamping: 0.84,
    maxHeadYaw: 0.48, // radians (~28 deg)
    maxHeadPitch: 0.32, // radians (~18 deg)
    maxHeadRoll: 0.12, // radians (~7 deg)

    maxBodyYaw: 0.25,
    maxBodyPitch: 0.16,
    maxBodyRoll: 0.08,

    // Idle breathing & movement (gentle & subtle)
    breathingFrequency: 1.4, // Hz
    breathingAmplitudeY: 0.012,
    breathingScaleY: 0.005,
    flipperIdleSway: 0.035,

    // Click reaction (subtle & restrained)
    clickBounceImpulse: 0.08,
    clickJiggleImpulse: 0.06,
    bounceStiffness: 0.18,
    bounceDamping: 0.76,

    // Blink settings
    blinkIntervalMin: 2.8, // seconds
    blinkIntervalMax: 5.5,
    blinkDuration: 0.16, // seconds
  },

  // ── Camera & Stage (scaled back for refined mascot proportion) ──
  camera: {
    fov: 32,
    near: 0.1,
    far: 50,
    desktopPos: [0, 1.35, 7.5] as [number, number, number],
    tabletPos: [0, 1.3, 8.2] as [number, number, number],
    mobilePos: [0, 1.15, 8.8] as [number, number, number],
    target: [0, 1.3, 0] as [number, number, number],
  },

  // ── Lighting ──
  lighting: {
    ambientIntensity: 0.85,
    keyLightIntensity: 2.4,
    keyLightPos: [3.5, 4.5, 4.0] as [number, number, number],
    fillLightIntensity: 1.1,
    fillLightPos: [-3.5, 2.0, 3.0] as [number, number, number],
    rimLightIntensity: 1.8,
    rimLightPos: [0, 3.0, -3.5] as [number, number, number],
    bottomBounceIntensity: 0.4,
    bottomBouncePos: [0, -2.0, 2.0] as [number, number, number],
  },
} as const;
