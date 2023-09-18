import { style } from "@vanilla-extract/css";
import { vars } from '@spotify-clone/ui';
import { calc } from '@vanilla-extract/css-utils';


export const mainview = style({
    gridRow: 'span 1 / span 1',
    backgroundColor: vars.colors.primary,
    color: vars.colors.text.primary,
    height: calc.subtract('100vh','70px'),
    overflowY: 'hidden',
    maxWidth: '100%',
    minHeight: '0',
    minWidth: '0',
    
});
