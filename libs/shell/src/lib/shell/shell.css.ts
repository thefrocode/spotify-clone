import { style } from "@vanilla-extract/css";

export const shell = style({
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    gridTemplateRows: "1fr 64px",
    height: "100vh",
    overflow: "hidden",
    gap: '8px',
    padding: '8px'
})