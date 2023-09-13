import { style } from "@vanilla-extract/css";

export const shell = style({
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    gridTemplateRows: "1fr 72px",
    height: "100vh",
    overflowY: "scroll",
})