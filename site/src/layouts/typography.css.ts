import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { createFontStack, createStyleObject } from '@capsizecss/core';

import openSansMetrics from '@capsizecss/metrics/openSans';
import arialMetrics from '@capsizecss/metrics/arial';

type TextElement = 'p' | 'h1' | 'h2' | 'h3' | 'h4';

type FontProperties = {
  fontSize: number;
  lineGap: number;
};

type TextElementProperties = {
  fontProperties: FontProperties;
};

const textElementProperties = {
  p: {
    fontProperties: {
      fontSize: 18,
      lineGap: 12,
    },
  },
  h1: {
    fontProperties: {
      fontSize: 44,
      lineGap: 18,
    },
  },
  h2: {
    fontProperties: {
      fontSize: 32,
      lineGap: 16,
    },
  },
  h3: {
    fontProperties: {
      fontSize: 28,
      lineGap: 14,
    },
  },
  h4: {
    fontProperties: {
      fontSize: 24,
      lineGap: 12,
    },
  },
} satisfies Record<TextElement, TextElementProperties>;

for (const [element, { fontProperties }] of Object.entries(
  textElementProperties,
)) {
  const { fontSize, lineHeight, ...pseudos } = createStyleObject({
    ...fontProperties,
    fontMetrics: openSansMetrics,
  });

  globalStyle(element, { fontSize, lineHeight });
  globalStyle(`${element}::before`, pseudos['::before']);
  globalStyle(`${element}::after`, pseudos['::after']);
}

const { fontFamily, fontFaces } = createFontStack(
  [openSansMetrics, arialMetrics],
  {
    fontFaceFormat: 'styleObject',
  },
);

globalStyle('p, h1, h2, h3, h4', {
  fontFamily: `${fontFamily}, sans-serif`,
});

globalStyle('h1, h2, h3, h4', {
  fontWeight: 'bold',
});

fontFaces.forEach((face) =>
  globalFontFace(face['@font-face'].fontFamily, face['@font-face']),
);
