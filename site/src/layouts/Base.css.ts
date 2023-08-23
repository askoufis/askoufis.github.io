import { style } from '@vanilla-extract/css';

export const base = style({
  height: '100%',
  margin: '0 auto',
  padding: '1.5rem',
  maxWidth: '48rem',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const nav = style({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'space-between',
});
