import { style } from '@vanilla-extract/css';
import { vars } from '@spotify-clone/ui';

export const library = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '40px',
  gap: '20px',
  color: vars.colors.text.secondary,
  textDecoration: 'none',
  ':hover': {
    color: vars.colors.text.primary,
  },
});

export const libraryButton = style({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  color: vars.colors.text.secondary,
  background: 'transparent',
  border: 'none',
  fontWeight: vars.fonts.weight.bold,
});

export const libraryCategories = style({
  display: 'flex',
  gap: '8px',
  paddingInlineStart: '0',
});
export const librarySearch = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const librarySearchSelect = style({
  background: 'transparent',
  border: 'none',
  color: vars.colors.text.secondary,
  fontWeight: vars.fonts.weight.bold,
});

export const libraryList = style({
  overflowY: 'hidden',
  overflowX: 'hidden',
  height: 'auto',
  ':hover': {
    overflowY: 'scroll',
  },
  width: '100%',
});

