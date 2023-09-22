import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const navbarLibrary = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '40px',
  gap: '20px',
  color: vars.colors.text.secondary,
  textDecoration: 'none',
  ':hover': {
    color: vars.colors.text.primary,
  },
});

export const navbarLibraryButton = style({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  color: vars.colors.text.secondary,
  background: 'transparent',
  border: 'none',
  fontSize: '1rem',
  fontWeight: 700,
});

export const navbarLibraryCategories = style({
  display: 'flex',
  gap: '8px',
  paddingInlineStart: '0',
});
export const navbarLibrarySearch = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const navbarLibrarySearchSelect = style({
  background: 'transparent',
  border: 'none',
  color: vars.colors.text.secondary,
  fontSize: '1rem',
  fontWeight: 700,
});

export const navbarLibraryList = style({
  overflowY: 'hidden',
  overflowX: 'hidden',
  height: 'auto',
  ':hover': {
    overflowY: 'scroll',
  },
  width: '100%',
});

export const navbarLibraryListItem = style({
  display: 'grid',
  gridTemplateColumns: '48px 1fr',
  gridTemplateRows: '24px 24px',
  padding: '8px',
  columnGap: '8px',
  whiteSpace: 'nowrap',
});
export const navbarLibraryListItemImage = style({
  gridRow: 'span 2 / span 2',
  height: '48px',
  width: '48px',
  borderRadius: '4px',
});
export const navbarLibraryListItemArtistImage = style({
    gridRow: 'span 2 / span 2',
    height: '48px',
    width: '48px',
    borderRadius: '50%',
  });

export const navbarLibraryListItemTitle = style({
  fontWeight: 400,
  fontSize: '14px',
  textOverflow: 'ellipsis',
});
export const navbarLibraryListItemDescription = style({
  fontWeight: 400,
  fontSize: '14px',
  color: vars.colors.text.subdued,
  justifyContent: 'left',
  alignItems: 'center',
  display: 'flex',
});
