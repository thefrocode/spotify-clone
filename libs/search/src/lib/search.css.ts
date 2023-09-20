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

export const searchListCardHeading= style({
  color: '#fff',
  fontFamily: 'sans-serif',
})

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
  fontSize: '1.5rem',
  fontWeight: '700',
  fontFamily: 'sans-serif',
  color: '#fff',
  padding: '16px'
})