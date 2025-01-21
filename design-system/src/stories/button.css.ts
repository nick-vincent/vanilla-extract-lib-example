import { createGlobalTheme, createTheme, style } from '@vanilla-extract/css';

import { TOKENS, THEME } from './theme';

createGlobalTheme(':root', THEME, TOKENS);

export const button = style({
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  backgroundColor: THEME.color.brand,
});

export const redThemeClass = createTheme(THEME, {
  color: {
    brand: 'red',
  },
});
