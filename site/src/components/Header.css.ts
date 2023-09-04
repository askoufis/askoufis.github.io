import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const nav = style({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'space-between',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
});

const buttonSize = '50px';

export const navButton = style({
  marginTop: calc(buttonSize).negate().divide(4).toString(),
  display: 'none',
  border: 'none',
  cursor: 'pointer',
  borderRadius: 9999,
  width: buttonSize,
  height: buttonSize,
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'block',
    },
  },
  ':hover': {
    backgroundColor: '#bbb',
  },
  transition: 'background-color 0.1s',
});

export const barContainer = style({
  height: '40%',
  width: '75%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const barSizes = {
  large: '60%',
  medium: '45%',
  small: '30%',
};

export const bar = styleVariants(barSizes, (barSize) => ({
  width: barSize,
  height: 4,
  backgroundColor: 'black',
  alignSelf: 'flex-end',
}));
