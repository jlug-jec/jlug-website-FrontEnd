import * as THREE from "three";

/**
 * Creates high-resolution transparent Iris & Pupil texture matching Pingu Tiwari:
 * Deep espresso iris gradient, amber edge transition, deep black pupil, and dual specular highlights.
 */
export function createIrisTexture(): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.46;

  ctx.clearRect(0, 0, size, size);

  // Dark Iris Gradient
  const irisGrad = ctx.createRadialGradient(cx, cy, r * 0.2, cx, cy, r);
  irisGrad.addColorStop(0, "#4a3322"); // warm deep brown center
  irisGrad.addColorStop(0.55, "#2b1c13");
  irisGrad.addColorStop(0.85, "#18100b");
  irisGrad.addColorStop(1, "#0a0705"); // dark outer ring

  ctx.fillStyle = irisGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();

  // Iris subtle golden/amber radial striations
  ctx.save();
  ctx.translate(cx, cy);
  ctx.strokeStyle = "rgba(245, 184, 46, 0.15)";
  ctx.lineWidth = 1.8;
  for (let i = 0; i < 28; i++) {
    const angle = (i / 28) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(Math.cos(angle) * (r * 0.35), Math.sin(angle) * (r * 0.35));
    ctx.lineTo(Math.cos(angle) * (r * 0.88), Math.sin(angle) * (r * 0.88));
    ctx.stroke();
  }
  ctx.restore();

  // Dark Outer Ring Outline for crisp definition
  ctx.strokeStyle = "rgba(10, 7, 5, 0.6)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, r - 1.5, 0, Math.PI * 2);
  ctx.stroke();

  // Pupil (Deep black)
  const pupilRadius = r * 0.52;
  ctx.fillStyle = "#07080a";
  ctx.beginPath();
  ctx.arc(cx, cy, pupilRadius, 0, Math.PI * 2);
  ctx.fill();

  // Primary Specular Reflection Highlight (top-left, large crisp white oval)
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
  ctx.shadowBlur = 8;
  ctx.beginPath();
  ctx.ellipse(
    cx - pupilRadius * 0.48,
    cy - pupilRadius * 0.48,
    pupilRadius * 0.42,
    pupilRadius * 0.35,
    -Math.PI / 4,
    0,
    Math.PI * 2
  );
  ctx.fill();

  // Secondary Specular Reflection Highlight (bottom-right, small round dot)
  ctx.beginPath();
  ctx.arc(cx + pupilRadius * 0.52, cy + pupilRadius * 0.48, pupilRadius * 0.18, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export function createEyeTexture(): THREE.CanvasTexture {
  return createIrisTexture();
}

/**
 * Creates soft radial contact shadow texture for ground placement.
 */
export function createShadowTexture(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.45;

  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
  grad.addColorStop(0, "rgba(0, 0, 0, 0.65)");
  grad.addColorStop(0.35, "rgba(0, 0, 0, 0.42)");
  grad.addColorStop(0.7, "rgba(0, 0, 0, 0.15)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Creates high-res golden feather crest texture with 3 sweeping curves.
 */
export function createCrestTexture(isFlipped: boolean = false): THREE.CanvasTexture {
  const w = 512;
  const h = 512;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  ctx.clearRect(0, 0, w, h);

  if (isFlipped) {
    ctx.translate(w, 0);
    ctx.scale(-1, 1);
  }

  // 3 Curved golden feather strokes
  const drawFeather = (
    startX: number,
    startY: number,
    cp1X: number,
    cp1Y: number,
    tipX: number,
    tipY: number,
    cp2X: number,
    cp2Y: number,
  ) => {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.quadraticCurveTo(cp1X, cp1Y, tipX, tipY);
    ctx.quadraticCurveTo(cp2X, cp2Y, startX, startY + 28);
    ctx.closePath();

    const grad = ctx.createLinearGradient(startX, startY, tipX, tipY);
    grad.addColorStop(0, "#d99018");
    grad.addColorStop(0.4, "#f5b82e");
    grad.addColorStop(1, "#ffd55e");

    ctx.fillStyle = grad;
    ctx.fill();

    // Subtle edge highlight
    ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  // Top feather (longest)
  drawFeather(100, 160, 260, 120, 440, 220, 260, 210);

  // Middle feather
  drawFeather(120, 230, 250, 210, 410, 310, 250, 300);

  // Bottom feather
  drawFeather(140, 300, 240, 290, 360, 390, 230, 380);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}
