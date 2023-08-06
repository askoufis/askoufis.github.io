import { createFontStack } from '@capsizecss/core';
import { createTextStyle } from '@capsizecss/vanilla-extract';
import openSansMetrics from '@capsizecss/metrics/openSans';
import arialMetrics from '@capsizecss/metrics/arial';
import { globalFontFace, style, styleVariants } from '@vanilla-extract/css';

const headingLevels = {
  1: {
    fontSize: 44,
    lineGap: 18,
  },
  2: {
    fontSize: 38,
    lineGap: 16,
  },
  3: {
    fontSize: 32,
    lineGap: 14,
  },
  4: {
    fontSize: 24,
    lineGap: 12,
  },
};

export const heading = styleVariants(
  headingLevels,
  ({ fontSize, lineGap }, level) => [
    createTextStyle(
      {
        fontSize,
        lineGap,
        fontMetrics: openSansMetrics,
      },
      `heading_${level}`,
    ),
  ],
);

const textSizes = {
  large: {
    fontSize: 20,
    lineGap: 14,
  },
  standard: {
    fontSize: 18,
    lineGap: 12,
  },
  small: {
    fontSize: 16,
    lineGap: 12,
  },
};

export const text = styleVariants(textSizes, ({ fontSize, lineGap }, size) => [
  createTextStyle(
    {
      fontSize,
      lineGap,
      fontMetrics: openSansMetrics,
    },
    `text_${size}`,
  ),
]);

const { fontFamily, fontFaces } = createFontStack(
  [openSansMetrics, arialMetrics],
  {
    fontFaceFormat: 'styleObject',
  },
);

export const font = style({ fontFamily: `${fontFamily}, sans-serif` });

fontFaces.forEach((face) =>
  globalFontFace(face['@font-face'].fontFamily, face['@font-face']),
);
