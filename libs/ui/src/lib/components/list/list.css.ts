import { recipe } from '@vanilla-extract/recipes';

export const list = recipe({
  base: {
    width: '100%',
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
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    justifyContent: {
      start: {
        justifyContent: 'start',
      },
      end: {
        justifyContent: 'end',
      },
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
      evenly: {
        justifyContent: 'space-evenly',
      },
    },
    alignContent: {
      start: {
        alignItems: 'start',
      },
      end: {
        alignItems: 'end',
      },
      center: {
        alignItems: 'center',
      },
      baseline: {
        alignItems: 'baseline',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
  },
  defaultVariants: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'start',
    alignContent: 'start',
  },
});

export const listItem = recipe({
  variants: {
    flex: {
      0: {
        flex: 0,
      },
      1: {
        flex: 1,
      },
    },
    justifyContent: {
      start: {
        justifyContent: 'start',
      },
      end: {
        justifyContent: 'end',
      },
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
      evenly: {
        justifyContent: 'space-evenly',
      },
    },
  },
});
