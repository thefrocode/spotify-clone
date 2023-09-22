import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css'

export const button = style({
  borderRadius: '32px',
  padding: '4px 12px',
})

export const buttonPrimary = style([button,{
  backgroundColor: '#212121',
  border: 'none'
}])

export const buttonSecondary = style([button,{
  backgroundColor: 'transparent',
  border: '1px solid #ffffff'
}])

