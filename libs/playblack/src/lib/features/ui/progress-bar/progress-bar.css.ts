

import { vars } from "@spotify-clone/ui";
import { style } from "@vanilla-extract/css";

export const progressBar = style({
  width: '300px',
  backgroundColor: vars.colors.accent,
  borderRadius: '5px',
  height: '3px',
});
export const progressBarInner = style({
  height: '100%',
  backgroundColor: 'blue',
  borderRadius: '5px',
});
