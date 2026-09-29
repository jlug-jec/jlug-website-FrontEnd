import { ComponentType, CSSProperties } from 'react';

export interface SplitFlapTextProps {
  words?: string[];
  text?: string;
  flipDuration?: number;
  stagger?: number;
  cycleDelay?: number;
  charset?: 'alpha' | 'alphanumeric' | 'numeric' | string;
  flipsPerChar?: number;
  tileColor?: string;
  textColor?: string;
  tileRadius?: number;
  gap?: number;
  fontSize?: number;
  loop?: boolean;
  padTo?: number;
  highlights?: number[][];
  highlightColor?: string;
  className?: string;
  style?: CSSProperties;
}

declare const SplitFlapText: ComponentType<SplitFlapTextProps>;
export default SplitFlapText;
