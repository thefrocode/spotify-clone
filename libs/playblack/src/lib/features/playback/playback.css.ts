import { globalStyle, style } from "@vanilla-extract/css";

export const playback= style({
    gridColumn: 'span 2 / span 2',
})

export const cardTitleGroup = style({
    display: 'flex',
    flexDirection: 'column',
    gridRow: 'span 2 / span 2',
    justifyContent: 'center',
})

export const playbackControls = style({
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
})

export const playButton = style({
    backgroundColor: '#fff !important',
    borderRadius: '50%',
    padding: '8px'
})

globalStyle(`${playbackControls}> button`, {
    backgroundColor: 'transparent',
    border: 'none',
})


