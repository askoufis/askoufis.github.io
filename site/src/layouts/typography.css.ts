import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { createFontStack } from '@capsizecss/core';

import openSansMetrics from '@capsizecss/metrics/openSans';
import arialMetrics from '@capsizecss/metrics/arial';

const { fontFamily, fontFaces } = createFontStack(
  [openSansMetrics, arialMetrics],
  {
    fontFaceFormat: 'styleObject',
  },
);

globalStyle('*', {
  fontFamily: `${fontFamily}, sans-serif`,
});

fontFaces.forEach((face) =>
  globalFontFace(face['@font-face'].fontFamily, face['@font-face']),
);

globalStyle('a', { textDecoration: 'none', color: '#258099' });

globalStyle('h1', {
  fontSize: '3rem',
});
globalStyle('h2', {
  fontSize: '2rem',
});
globalStyle('h3', {
  fontSize: '1.5rem',
});
globalStyle('h4', {
  fontSize: '1.2rem',
});

globalStyle('p', {
  padding: '0.5em 0',
});

globalStyle('h1, h2, h3, h4', {
  paddingTop: '1em',
  paddingBottom: '0.5em',
});
