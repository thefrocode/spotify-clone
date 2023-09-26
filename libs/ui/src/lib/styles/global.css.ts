import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
});
globalStyle(`html, body`, {
  height: '100vh',
});

globalStyle(`body`, {
  lineHeight: 1.5,
  WebkitFontSmoothing: `antialiased`,
});
globalStyle('body, body *', {
  fontFamily: vars.fonts.body,
  color: vars.colors.text.primary,
  fontSize: vars.fonts.size.normal,
  fontWeight: vars.fonts.weight.normal,
});

globalStyle('body', {
  backgroundColor: 'black',
});

globalStyle('p', {
  margin: '0',
  padding: '0',
});

globalStyle('h2', {
  fontSize: vars.fonts.size.large,
  fontWeight: vars.fonts.weight.bold,
  color: vars.colors.text.primary,
});

globalStyle(`img, picture, video, canvas, svg`, {
  display: `block`,
  maxWidth: `100%`,
});

globalStyle(`input, button, textarea, select`, {
  font: `inherit`,
});

globalStyle(`p, h1, h2, h3, h4, h5, h6`, {
  overflowWrap: `break-word`,
});

globalStyle(`#root`, {
  isolation: `isolate`,
});
