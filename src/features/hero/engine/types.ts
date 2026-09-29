export type BlockState =
  | 'WAITING'
  | 'FALLING_INITIAL'    // Falling + sliding toward overshoot target
  | 'HESITATING'         // Brief pause — "player" is thinking
  | 'CORRECTING'         // Sliding back toward final X
  | 'OVERCORRECTING'     // Went slightly past finalX the other way
  | 'FINAL_ALIGN'        // Last precise nudge to finalX
  | 'HARD_DROP'          // Fast vertical drop to lock
  | 'SETTLED'            // Locked in place
  | 'RESETTING';         // Falling off screen during collapse

export type BlockPiece = {
  id: number;
  widthCells: number;
  heightCells: number;
  width: number;      // Pixel width
  height: number;     // Pixel height

  // Final target placement (pixels)
  finalX: number;
  finalY: number;

  // Current placement (pixels)
  currentX: number;
  currentY: number;

  // Human-player movement
  overshootX: number;       // Where the player initially aims (wrong)
  overcorrectX: number;     // Second overshoot in opposite direction
  hoverY: number;           // Height it pauses at before the hard drop
  spawnDelay: number;       // ms before this piece appears
  hesitateTimer: number;    // Frames to pause at hesitation point
  state: BlockState;

  // Physics
  velocityY: number;
  velocityX: number;
  horizontalSpeed: number;

  // Visuals
  color: string;
  brightness: number;       // Subtle per-block brightness variation
  flashPhase: number;
  interactiveDx: number;
  interactiveDy: number;

  // Letter membership (for staggered construction)
  letterIndex: number;      // 0=J, 1=L, 2=U, 3=G
};
