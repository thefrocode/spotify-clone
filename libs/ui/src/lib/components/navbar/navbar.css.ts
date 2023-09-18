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
})

export const navbarLibraryButton = style({
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    color: vars.colors.text.secondary,
    fontFamily: vars.fonts.body,
    background: 'transparent',
    border: 'none',
    fontSize: '1rem',
    fontWeight: 700,
})

export const navbarLibraryCategories = style({
    display: 'flex',
    gap: '8px',
    paddingInlineStart: '0',
})
export const navbarLibrarySearch = style({
    display: 'flex',
    justifyContent: 'space-between',
})

export const navbarLibrarySearchSelect = style({
    background: 'transparent',
    border: 'none',
    color: vars.colors.text.secondary,
    fontFamily: vars.fonts.body,
    fontSize: '1rem',
    fontWeight: 700,
})

export const navbarLibraryList = style({
    overflowY: 'scroll',
    height: 'auto',
    
})

export const navbarLibraryListItem = style({
    display: 'grid',
    gridTemplateColumns: '48px 1fr',
    gridTemplateRows: '24px 24px',
    padding: '8px',
    columnGap: '8px',
})
export const navbarLibraryListItemImage = style({
    gridRow: 'span 2 / span 2',
    height: '48px',
    width: '48px',
})

export const navbarLibraryListItemTitle = style({
    fontWeight: 400,
    fontSize: '1rem',
    color: vars.colors.text.primary,
    fontFamily: vars.fonts.body,
})
export const navbarLibraryListItemDescription = style({
    fontWeight: 400,
    fontSize: '14px',
    color: vars.colors.text.secondary,
    fontFamily: vars.fonts.body,
    justifyContent: 'left',
    alignItems: 'center',
    display: 'flex',
})