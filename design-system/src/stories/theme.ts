import { createGlobalThemeContract, createTheme } from '@vanilla-extract/css';

export const TOKENS = {
  color: {
    brand: 'blue',
  },
};

export const THEME = createGlobalThemeContract(TOKENS, (_, path) =>
  path.join('-'),
);

export const createButtonTheme = (theme) =>
  createTheme(THEME, {
    ...TOKENS,
    ...theme,
  });
