import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("body, body *", {
  fontFamily: vars.fonts.body,
  color: vars.colors.text.primary,  
  fontSize: vars.fonts.size.normal,
  fontWeight: vars.fonts.weight.normal,
});

globalStyle("body", {
    backgroundColor: 'black'
})

globalStyle("p",{
    margin: '0',
    padding: '0'
})