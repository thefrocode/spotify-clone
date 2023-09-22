import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("body, body *", {
  fontFamily: vars.fonts.body,
  color: vars.colors.text.primary,  
});

globalStyle("body", {
    backgroundColor: 'black'
})