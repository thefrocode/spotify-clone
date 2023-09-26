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
  width: '100%',
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
  //height: '100%',
  ':hover': {
    overflowY: 'scroll',
  },
  width: '100%',
});

export const librarySearchInputGroup = style({
  height: '32px',
  width: '160px',
  borderRadius: '8px',
  backgroundColor: '#242424',
  border: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
  padding: '0 12px',
});

export const librarySearchInputGroupIcon= style({
    flex: '0',
})
