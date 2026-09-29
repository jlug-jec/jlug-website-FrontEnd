export const HERO_BLOCK_CONFIG = {
  // Internal Grid Resolution (horizontal / desktop layout)
  internalWidth: 1200,
  internalHeight: 500,
  // Internal Grid Resolution (vertical / mobile layout — letters stacked top-to-bottom)
  internalWidthVertical: 300,
  internalHeightVertical: 820,
  cellSize: 20,
  cellGap: 3,
  letterSpacing: 280,
  letterStackGap: 26,
  startX: 70,
  startY: 160,
  startXVertical: 46,
  startYVertical: 28,

  // Sequence Timing (ms)
  // buildDuration should roughly match how long the physics actually
  // takes to settle every piece — if it's much longer, the wordmark
  // just sits there finished, which reads as a dead pause.
  buildDuration: 3200,
  holdDuration: 1500,
  resetDuration: 1800,
  get totalLoopDuration() {
    return this.buildDuration + this.holdDuration + this.resetDuration;
  },

  // Physics Tuning (all values are per 60fps-equivalent frame and get
  // scaled by real elapsed time, so speed is identical on 60/120/144Hz)
  gravity: 0.16,
  horizontalSpeedBase: 2.6,
  horizontalSpeedVariance: 1.6,
  correctionSpeed: 2.0,
  hardDropAccel: 0.55,
  resetGravity: 0.8,
  // Fraction of remaining horizontal distance covered per frame, so
  // pieces ease into position instead of sliding at a flat rate and snapping.
  approachFactor: 0.12,
  // How far above its resting place a piece hovers before the hard drop
  hoverGapMin: 70,
  hoverGapMax: 130,
  hesitateFramesMin: 6,
  hesitateFramesMax: 18,

  // Human-player movement (horizontal / desktop layout)
  overshootMin: 60,
  overshootMax: 180,
  spawnOffsetMin: 80,
  spawnOffsetMax: 200,
  spawnHeightMin: 450,
  spawnHeightMax: 650,

  // Human-player movement (vertical / mobile layout — narrower column,
  // so blocks travel less far but still visibly enter from left/right)
  overshootMinVertical: 30,
  overshootMaxVertical: 70,
  spawnOffsetMinVertical: 60,
  spawnOffsetMaxVertical: 130,

  // Block chunking
  maxChunkWidth: 5,
  maxChunkHeight: 4,

  // Visuals
  gridOpacity: 0.06,
  colors: [
    { color: "#F2F0E8", weight: 70 },
    { color: "#E8E6DF", weight: 12 },
    { color: "#D7D5CE", weight: 10 },
    { color: "#777770", weight: 5 },
    { color: "#B7F34A", weight: 3 },
  ],
};
