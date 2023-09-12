import { style } from "@vanilla-extract/css";

export const shell = style({
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    gridTemplateRows: "80px 1fr",
    height: "100vh",
    overflowY: "hidden",
})