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

// export const baseCard = style({
//   display: 'flex',
//   gap: '0.5rem',
//   backgroundColor: vars.colors.subdued,
//   overflow: 'hidden',
// });
export const card = recipe({
  base:{
    padding: '0.5rem',
    columnGap: '0.5rem',
  },
  variants: {
    display: {
      flex: {
        display: 'flex',
      },
      grid: {
        display: 'grid',
      },
    },
    backgroundColor: {
      subdued: vars.colors.subdued,
    },
    flexDirection: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    wrap:{
      wrap:{
        whiteSpace: 'normal',
      },
      nowrap:{
        whiteSpace: 'nowrap',
      }
    },
    cols: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      card: {
        gridTemplateColumns: '48px 1fr',
      },
    },
    rows: {
      1: {
        gridTemplateRows: 'repeat(1, 1fr)',
      },
      2: {
        gridTemplateRows: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateRows: 'repeat(3, 1fr)',
      },
      4: {
        gridTemplateRows: 'repeat(4, 1fr)',
      },
      card: {
        gridTemplateRows: '24px 24px',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        display: 'flex',
        flexDirection: 'row',
      },
      style: {
        gap: '1rem',
        justifyContent: 'space-between',
      },
    },
    {
      variants: {
        display: 'flex',
        flexDirection: 'column',
      },
      style: {
        padding: '1rem',
        flex: 1,
        alignItems: 'center',
      },
    },
    {
      variants: {
        display: 'grid',
        flexDirection: 'row',
      },
      style: {
        padding: '1rem',
        flex: 1,
        alignItems: 'center',
      },
    },
  ],
  defaultVariants: {
    backgroundColor: 'subdued',
  },
});

export const cardItem = recipe({
  base: {
    padding: '8px',
    columnGap: '8px',
    whiteSpace: 'nowrap',
  },
});

export const cardImage = recipe({
  base: {
    gridRow: 'span 2 / span 2',
  },
  variants: {
    direction: {
      row: {
        width: '100%',
      },
      column: {
        width: '48px',
        height: '48px',
      },
    },
    type: {
      artist: {
        borderRadius: '50%',
      },
      album: {
        borderRadius: '5px',
      },
      playlist: {
        borderRadius: '5px',
      },
      track: {
        borderRadius: '5px',
      },
    },
  },
});

export const cardTitle = styleVariants({
  library: {
    fontSize: vars.fonts.size.small,
  },
  list: {
    fontSize: vars.fonts.size.small,
  },
});

export const cardDescription = style({
  fontSize: vars.fonts.size.small,
  color: vars.colors.text.subdued,
  justifyContent: 'left',
  alignItems: 'center',
  display: 'flex',
});
