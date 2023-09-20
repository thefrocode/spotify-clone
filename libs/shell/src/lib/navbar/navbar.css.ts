import { vars } from "@spotify-clone/ui";
import { style } from "@vanilla-extract/css";


export const navbar = style({
    gridRow: 'span 1 / span 1',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    color: vars.colors.text.primary,
    width: '100%',
    fontFamily: vars.fonts.body,
    fontWeight: 700,
    fontSize: '1rem',
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