import { globalStyle, keyframes, style } from '@vanilla-extract/css';

export const logo = style({
  height: '6em',
  padding: '1.5em',
  willChange: 'filter',
});

export const viteHover = style({
  ':hover': { filter: 'drop-shadow(0 0 2em #ff0000)' },
});

export const reactHover = style({
  ':hover': { filter: 'drop-shadow(0 0 2em #61dafbaa)' },
});

export const card = style({
  padding: '2em',
});

export const readTheDocs = style({
  color: '#888',
});

const logoSpinKeyframes = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

export const logoSpin = style({
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      animation: `${logoSpinKeyframes} infinite 20s linear`,
    },
  },
});

globalStyle('#root', {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center',
});
