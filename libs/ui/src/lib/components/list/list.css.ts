import { recipe } from '@vanilla-extract/recipes';

export const list = recipe({
  base:{
    width: '100%',
  },
  variants:{
    display:{
        flex:{
            display: 'flex',

        },
        grid:{
            display: 'grid',
        }
    },
    direction:{
        row:{
            flexDirection: 'row',
        },
        column:{
            flexDirection: 'column',
        }
    },
    gap:{
        0:{
            gap: '0px',
        },
        1:{
            gap: '4px',
        },
        2:{
            gap: '8px',
        },
        3:{
            gap: '16px',
        },
        4:{
            gap: '32px',
        },
        5:{
            gap: '64px',
        },
    },
    justify:{
        start:{
            justifyContent: 'start',
        },
        end:{
            justifyContent: 'end',
        },
        center:{
            justifyContent: 'center',
        },
        between:{
            justifyContent: 'space-between',
        },
        around:{
            justifyContent: 'space-around',
        },
        evenly:{
            justifyContent: 'space-evenly',
        },
    },
    align:{
        start:{
            alignItems: 'start',
        },
        end:{
            alignItems: 'end',
        },
        center:{
            alignItems: 'center',
        },
        baseline:{
            alignItems: 'baseline',
        },
        stretch:{

            alignItems: 'stretch',
        },

    },

  },
  defaultVariants:{
    display: 'flex',
    direction: 'row',
    gap: 0,
    justify: 'start',
    align: 'start',
  }
});

export const listItem = recipe({
    variants:{
        flex:{
            0:{ 
                flex: 0,
            },
            1:{
                flex: 1,
            }
        }
    }
})

// export const flexRowList = style([
//   list,
//   {
//     display: 'flex',
//     flexDirection: 'row',
//   },
// ]);
// export const flexColumnList = style([
//   list,
//   { display: 'flex', flexDirection: 'row' },
// ]);

// export const gridRowList = style([
//   list,
//   {
//     display: 'grid',
//   },
// ]);
// export const gridColumnList = style([
//   list,
//   {
//     display: 'grid',
//   },
// ]);
