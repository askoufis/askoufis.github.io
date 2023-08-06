import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';

const space = vars.space;

// Not responsive yet
const responsiveProperties = defineProperties({
  properties: {
    paddingLeft: space,
    paddingRight: space,
    paddingTop: space,
    paddingBottom: space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
