import { vars } from '@spotify-clone/ui';
import { style } from '@vanilla-extract/css';

export const search = style({
  overflowY: 'scroll',
  margin: '8px'
})
export const searchList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)', // 2 columns for screens 768px wide or less
    },
  },
  gap: '16px',
});


export const searchListCard = style({
  maxWidth: '208px',
  height: '208px',
  borderRadius: '4px',
  position: 'relative',
  overflow: 'hidden',
});

export const searchListCardImage = style({
  position: 'absolute',
  bottom: '0',
  right: '0',
  width: '96px',
  height: '96px',
  transform: 'rotate(25deg)',
  margin: '-12px',
})
export const searchListCardText = style({
  fontSize: vars.fonts.size.large,
  fontWeight: '700',
  padding: '16px'
})

export const topResultImage = style({
  width: '92px',
  height: '92px',
})
export const topResultHeading = style({
  fontSize: vars.fonts.size.extraLarge,
  fontWeight: '700',
})

export const topResultFooter = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '12px',
})

export const topResultFooterText = style({
  fontWeight: '400',
  color: '#a7a7a7',
  alignSelf: 'center',
})

export const resultList = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
})