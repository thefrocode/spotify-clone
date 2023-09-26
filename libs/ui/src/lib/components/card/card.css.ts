import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

// export const card = style({
//   display: 'flex',
//   flexDirection: 'column',
//   maxWidth: '100%',
//   maxHeight: '100%',

// });

export const cardList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
});

// export const cardTitle = style({
//   fontWeight: vars.fonts.weight.bold,
//   whiteSpace: 'nowrap',
// });
// export const cardDescription = style({
//   fontSize: vars.fonts.size.small,

//   color: vars.colors.text.secondary,
//   whiteSpace: 'nowrap',
// });

// export const cardItem = style({
//   display: 'flex',
//   gap: '0.5rem',
//   backgroundColor: vars.colors.subdued,
//   overflow: 'hidden',
// });

// globalStyle(`${cardItem} > div> span`, {
//   color: '#b3b3b3',
// });
// globalStyle(`${cardItem} > span`, {
//   color: '#b3b3b3',
// });

// export const cardItemColumn = style([
//   cardItem,
//   {

//     flexDirection: 'column',
//     padding: '1rem',
//     flex: 1,
//     alignItems: 'center',
//   },
// ]);
// export const cardImageArtistColumn = style({
//   borderRadius: '50%',
//   width: '100%',
//   height: '100%',
// })

// export const cardImageColumn = style({
//   borderRadius: '5px',
//   width: '100%',
//   height: '100%',
// })

// globalStyle(`${cardItemColumn} > p`, {
//   fontWeight: vars.fonts.weight.bold,
//   alignSelf: 'flex-start',

// });
// globalStyle(`${cardItemColumn} > span`, {
//   alignSelf: 'flex-start',
// });

// export const cardItemRow = style([
//   cardItem,
//   {
//     gap: '1rem',
//     justifyContent: 'space-between',
//   },
// ]);
// export const cardImageRow= style({
//   borderRadius: '50%',
//   width: '100%',
//   height: '100%',
// })
// globalStyle(`${cardItemRow} > img`, {
//   gridRow: 'span 2 / span 2',
//   height: '48px',
//   width: '48px',
//   borderRadius: '4px',
// });

export const baseCard = style({
  display: 'flex',
  gap: '0.5rem',
  backgroundColor: vars.colors.subdued,
  overflow: 'hidden',
});

export const card = styleVariants({
  row: [
    baseCard,
    {
      flexDirection: 'row',
      gap: '1rem',
      justifyContent: 'space-between',
    },
  ],
  column: [
    baseCard,
    {
      flexDirection: 'column',
      padding: '1rem',
      flex: 1,
      alignItems: 'center',
    },
  ],
});

export const cardImage = styleVariants({
  column: {
    width: '100%',
  },
  row: {
    width: '48px',
    height: '48px',
  },
});
