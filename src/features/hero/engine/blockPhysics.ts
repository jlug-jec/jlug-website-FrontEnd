import { BlockPiece } from './types';
import { HERO_BLOCK_CONFIG } from '../data/config';

const C = HERO_BLOCK_CONFIG;

/** One 60fps frame, in milliseconds. */
const FRAME_MS = 1000 / 60;

/**
 * Eased horizontal step toward a target.
 *
 * Covers a fraction of the remaining distance each frame (so the piece
 * decelerates as it arrives) with a floor speed so it never crawls, and
 * never overshoots the target within a single step.
 */
function approach(current: number, target: number, minSpeed: number, frames: number): number {
  const delta = target - current;
  const distance = Math.abs(delta);
  if (distance < 0.5) return target;

  const eased = Math.max(distance * C.approachFactor, minSpeed) * frames;
  if (eased >= distance) return target;
  return current + Math.sign(delta) * eased;
}

/**
 * Multi-phase "human player" physics.
 *
 * Each piece goes through:
 *   WAITING → FALLING_INITIAL → HESITATING → CORRECTING → OVERCORRECTING → FINAL_ALIGN → HARD_DROP → SETTLED
 *
 * The horizontal path looks like:
 *   spawnX ──→ overshootX ──(pause)──→ overcorrectX ──→ finalX ──↓ LOCK
 *
 * This creates the visual impression of a human deciding where to place the piece.
 *
 * All motion is scaled by `dt` so the animation runs at the same real-world
 * speed regardless of the display's refresh rate.
 */
export function updateBlockPhysics(
  blocks: BlockPiece[],
  sequenceTime: number,
  prefersReducedMotion: boolean,
  dt: number = FRAME_MS,
) {
  // How many 60fps-equivalent frames elapsed. Clamped so a long stall
  // (tab regains focus, GC pause) can't teleport pieces through targets.
  const frames = Math.min(dt / FRAME_MS, 3);

  const resetStart = C.buildDuration + C.holdDuration;
  const isResetting = sequenceTime > resetStart;

  for (const b of blocks) {
    if (prefersReducedMotion) {
      b.currentX = b.finalX;
      b.currentY = b.finalY;
      b.state = 'SETTLED';
      continue;
    }

    // ── RESET PHASE: pieces fall apart ──
    if (isResetting) {
      if (b.state !== 'RESETTING') {
        b.state = 'RESETTING';
        // Stagger the collapse slightly by depth so it ripples downward.
        // Uses finalY directly (not an offset from a layout-specific
        // origin) so it behaves the same in horizontal and vertical modes.
        b.hesitateTimer = b.finalY * 0.03;
        b.velocityY = 0;
        // Add slight horizontal drift during collapse
        b.velocityX = (Math.random() - 0.5) * 3;
      }
      if (b.hesitateTimer > 0) {
        b.hesitateTimer -= frames;
        continue;
      }
      b.velocityY += C.resetGravity * frames;
      b.currentY += b.velocityY * frames;
      b.currentX += b.velocityX * frames;
      continue;
    }

    // ── BUILD PHASE ──

    // Stay invisible until spawn delay
    if (b.state === 'WAITING') {
      if (sequenceTime > b.spawnDelay) {
        b.state = 'FALLING_INITIAL';
      }
      continue;
    }

    // ── PHASE 1: Fall + slide toward overshoot target ──
    if (b.state === 'FALLING_INITIAL') {
      // Vertical: gentle gravity
      b.velocityY += C.gravity * frames;
      b.currentY += b.velocityY * frames;

      // Horizontal: ease toward overshootX
      const before = b.currentX;
      b.currentX = approach(b.currentX, b.overshootX, b.horizontalSpeed, frames);
      const arrivedHorizontally = b.currentX === b.overshootX && before !== b.overshootX;

      // Cap vertical position at this piece's hover height
      const reachedHover = b.currentY > b.hoverY;
      if (reachedHover) {
        b.currentY = b.hoverY;
        b.velocityY = 0;
      }

      // Pause to "think" once it's lined up and has stopped descending
      if ((arrivedHorizontally || b.currentX === b.overshootX) && reachedHover) {
        b.state = 'HESITATING';
        b.hesitateTimer =
          C.hesitateFramesMin +
          Math.random() * (C.hesitateFramesMax - C.hesitateFramesMin);
      }
      continue;
    }

    // ── PHASE 2: Hesitate — the "player" is thinking ──
    if (b.state === 'HESITATING') {
      b.hesitateTimer -= frames;
      // Subtle hover wobble
      b.currentY += Math.sin(b.hesitateTimer * 0.15) * 0.3 * frames;
      if (b.hesitateTimer <= 0) {
        b.state = 'CORRECTING';
      }
      continue;
    }

    // ── PHASE 3: Correct toward finalX (but overshoot slightly the other way) ──
    if (b.state === 'CORRECTING') {
      b.currentX = approach(b.currentX, b.overcorrectX, C.correctionSpeed, frames);
      if (b.currentX === b.overcorrectX) {
        b.state = 'OVERCORRECTING';
      }
      // Very slow drift down
      b.currentY += 0.3 * frames;
      continue;
    }

    // ── PHASE 4: Overcorrect back to exact finalX ──
    if (b.state === 'OVERCORRECTING') {
      b.currentX = approach(b.currentX, b.finalX, C.correctionSpeed * 0.8, frames);
      if (b.currentX === b.finalX) {
        b.state = 'FINAL_ALIGN';
      }
      b.currentY += 0.2 * frames;
      continue;
    }

    // ── PHASE 5: Final alignment pause before hard drop ──
    if (b.state === 'FINAL_ALIGN') {
      b.state = 'HARD_DROP';
      b.velocityY = 0;
      continue;
    }

    // ── PHASE 6: Hard drop straight down ──
    if (b.state === 'HARD_DROP') {
      b.velocityY += C.hardDropAccel * frames;
      b.currentY += b.velocityY * frames;
      if (b.currentY >= b.finalY) {
        b.currentY = b.finalY;
        b.currentX = b.finalX; // Ensure pixel-perfect alignment
        b.state = 'SETTLED';
        b.flashPhase = 1.0;
        b.velocityY = 0;
      }
      continue;
    }
  }
}
