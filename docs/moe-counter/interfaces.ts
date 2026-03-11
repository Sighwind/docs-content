export interface CounterSlugParams {
  /** Unique identifier for the counter */
  slug: string;
}

export interface CounterParams extends CounterSlugParams {
  /** Visual theme for the counter display */
  theme?: string;
  /** Minimum length */
  padding?: number;
  /** Offset pixel */
  offset?: number;
  /** Scale factor for the counter size */
  scale?: number;
  /** Vertical alignment of the counter */
  align?: "top" | "center" | "bottom";
  /** Whether to apply pixelation effect */
  pixelated?: boolean;
  /** Color scheme preference */
  darkmode?: "auto" | "light" | "dark";
  /** Override count */
  num?: number;
  /** Prefix to prepend to the counter */
  prefix?: number;
}
