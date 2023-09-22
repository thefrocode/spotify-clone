import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const home = style({
  overflowY: 'scroll',
});
export const homeGreeting = style({
  fontSize: vars.fonts.size.extraLarge,
  fontWeight: '700',
  whiteSpace: 'nowrap',
});

export const popularListGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  rowGap: '16px',
  columnGap: '24px',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns for screens 768px wide or less
    },
  },
});

export const popularCard = style({
  display: 'flex',
  alignItems: 'center',
  height: '80px',
});
export const popularCardImage = style({
  width: '80px',
  height: '80px',
  borderRadius: '8px',
  objectFit: 'cover',
  marginRight: '12px',
});
export const popularCardTitleSection = style({
  display: 'flex',
  flex: '1',
  backgroundColor: vars.colors.primary,
  alignSelf: 'stretch',
  alignItems: 'center',
  fontWeight: '700',
  padding: '12px',
});
export const popularCardText = style({});

export const homeHeading = style({
  fontSize: vars.fonts.size.large,
  fontWeight: '700',
  whiteSpace: 'nowrap',
});
