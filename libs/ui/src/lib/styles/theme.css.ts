import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {

  fonts: {
    heading: "Georgia, Times, Times New Roman, serif",
    body: "'Nunito Sans', sans-serif;",
    size:{
        small: "12px",
        normal: "14px",
        medium: "16px",
        large: "20px",
    }
  },
  colors: {
    primary: "#1DB954",
    secondary: "#191414",
    accent: "#212121",
    tertiary: "#121212",
    text: {
      primary: "#ffffff",
      secondary: "#535353",
      tertiary: "#FFFFFFE6",
      subdued: "#a7a7a7"
    },
  },
});