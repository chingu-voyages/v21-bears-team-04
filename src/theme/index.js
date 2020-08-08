import { createSpacing, createBreakpoints, createTypography } from './utils';

import { shapes, breakpoints, shadows, spacing } from './values';
import typography from './typography';
import palette from './palette';

export const theme = {
  spacing: createSpacing(spacing),
  breakpoints: createBreakpoints(breakpoints),
  typography: createTypography(typography),
  shapes,
  shadows,
  palette,
};
