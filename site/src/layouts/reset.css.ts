import { globalStyle } from '@vanilla-extract/css';

// Based off https://www.joshwcomeau.com/css/custom-css-reset/#eight-root-stacking-context-9

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('*', { margin: 0, padding: 0 });

globalStyle('body', {
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4', {
  overflowWrap: 'break-word',
});
