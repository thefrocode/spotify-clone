import { vars } from "@spotify-clone/ui";
import { style } from "@vanilla-extract/css";


export const navbar = style({
    gridRow: 'span 1 / span 1',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '100%',
    fontWeight: vars.fonts.weight.bold,
    maxWidth: '100%',
    minHeight: '0',
    rowGap: '8px',
  });
  
  export const navbarItem = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: '4px 12px',
    height: '40px',
    gap: '20px',
    color: vars.colors.text.secondary,
    textDecoration: 'none',
    ':hover': {
      color: vars.colors.text.primary,
    },
  });