import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const topbar = style({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
  color: vars.colors.text.primary,
  alignItems: 'center',
  padding: '0 24px',
  borderRadius: '50%',
});
export const topbarContainers = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '12px',
  alignItems: 'center',
});

export const topbarIcons = style({
  backgroundColor: 'black',
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
});

export const topbarSearch = style({
  height: '48px',
  width: '260px',
  borderRadius: '36px',
  backgroundColor: '#242424',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '0 12px',
});
export const topbarSearchInput = style({
  backgroundColor: 'transparent',
  border: 'none',
  flex: '1',
  color: vars.colors.text.primary,
  fontSize: '1rem',
  //on hover
  ':hover': {
    border: 'none',
    outline: 'none',
  },
  //on focus
  ':focus': {
    border: 'none',
    outline: 'none',
  },
});

export const topbarProfileDropdown = style({
  position: 'absolute',
  display: 'none',
  zIndex: 1,
});

export const topbarProfile = style({
  position: 'relative',
  display: 'inline-block',
  ':hover': {
    [topbarProfileDropdown]: {
      display: 'block',
    },
  },
});
