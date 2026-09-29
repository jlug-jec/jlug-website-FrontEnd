"use client";

import FallingBlockScene from "@/features/hero/components/FallingBlockScene";

/**
 * Thin wrapper around the modular FallingBlockScene.
 * Exists to preserve the existing import in page.tsx.
 */
export default function InteractiveWordmark() {
  return <FallingBlockScene />;
}
