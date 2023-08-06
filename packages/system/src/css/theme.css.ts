import { createTheme } from '@vanilla-extract/css';

export const [theme, vars] = createTheme({
  space: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    xlarge: '32px',
  },
});
