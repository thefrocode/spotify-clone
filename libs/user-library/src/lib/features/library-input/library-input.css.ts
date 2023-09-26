import { style } from "@vanilla-extract/css";

export const librarySearchInput = style({
    backgroundColor: 'transparent',
    border: 'none',
    flex: '0',
    width: '100px',
    //on hover
    ':hover': {
      border: 'none',
      outline: 'none',
    },
    //on focus
    ':focus': {
      border: 'none',
      outline: 'none',
    },
  });