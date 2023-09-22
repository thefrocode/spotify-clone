import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@spotify-clone/ui';

export const topbar = style({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
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

export const topbarProfile = style({
  position: 'relative',
  display: 'inline-block',
  float: 'right',
});
export const topbarProfileDropdown = style({
  position: 'absolute',
  display: 'none',
  zIndex: 1,
  right: 0,
  backgroundColor: '#242424',
  top: 40,
  minWidth: '160px',
  padding: '4px',
});

export const topbarProfileDropdownContent = style({
    listStyleType: 'none',
    paddingInlineStart: '0px',
    padding: '4px 8px',
});

globalStyle(`${topbarProfileDropdownContent} > li`, {
  
  paddingInlineStart: '0px',
  color: vars.colors.text.tertiary,
  fontSize: vars.fonts.size.small,
});
