import { style } from "@vanilla-extract/css";

export const flex = style({
    display: 'flex',
})

export const flexColumn = style({
    display: 'flex',
    flexDirection: 'column',
})

export const flexRow= style({
    display: 'flex',
    flexDirection: 'row',
})

export const flexColumnGrow= style({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
})

export const flexRowGrow= style({
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
})

export const fullWidth = style({
    width: '100%',
})