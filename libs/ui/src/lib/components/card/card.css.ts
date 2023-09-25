import { globalStyle, style } from '@vanilla-extract/css';
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

export const cardTitle = style({
  fontWeight: vars.fonts.weight.bold,
  whiteSpace: 'nowrap',
});
export const cardDescription = style({
  fontSize: vars.fonts.size.small,

  color: vars.colors.text.secondary,
  whiteSpace: 'nowrap',
});

export const cardItem = style({
  gap: '0.5rem',
  backgroundColor: vars.colors.subdued,
  overflow: 'hidden',
});

globalStyle(`${cardItem} > div> span`, {
  color: '#b3b3b3',
});
globalStyle(`${cardItem} > span`, {
  color: '#b3b3b3',
});

export const cardItemColumn = style([
  cardItem,
  {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    flex: 1,
    alignItems: 'center',
  },
]);
export const cardImageArtistColumn = style({
  borderRadius: '50%',
  width: '100%',
  height: '100%',
})

export const cardImageColumn = style({
  borderRadius: '5px',
  width: '100%',
  height: '100%',
})

globalStyle(`${cardItemColumn} > p`, {
  fontWeight: vars.fonts.weight.bold,
  alignSelf: 'flex-start',
  
});
globalStyle(`${cardItemColumn} > span`, {
  alignSelf: 'flex-start',
});

export const cardItemRow = style([
  cardItem,
  {
    display: 'grid',
    gridTemplateColumns: '48px 1fr',
    gridTemplateRows: '24px 24px',
    padding: '8px',
    columnGap: '8px',
    whiteSpace: 'nowrap',
  },
]);
export const cardImageRow= style({
  borderRadius: '50%',
  width: '100%',
  height: '100%',
})
// globalStyle(`${cardItemRow} > img`, {
//   gridRow: 'span 2 / span 2',
//   height: '48px',
//   width: '48px',
//   borderRadius: '4px',
// });
