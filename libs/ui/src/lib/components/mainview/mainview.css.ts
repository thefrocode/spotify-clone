import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
import { calc } from '@vanilla-extract/css-utils';


export const mainview = style({
    backgroundColor: vars.colors.primary,
    color: vars.colors.text.primary,
    height: calc.subtract('100vh','70px')
    
});
