import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  maxHeight: '100%',
});

export const cardList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
});

export const cardImage = style({});
export const cardTitle = style({
  fontSize: '16px',
  fontWeight: '700',
  whiteSpace: 'nowrap',
});
export const cardDescription = style({
  fontSize: '14px',
  fontWeight: '400',
  color: vars.colors.text.secondary,
  whiteSpace: 'nowrap',
});
