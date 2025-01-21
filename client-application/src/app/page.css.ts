// THIS WORKS
import { createButtonTheme } from '../../../design-system/src/stories/theme';

// THIS DOESN'T WORK
// import { createButtonTheme } from '../../../design-system/dist/index';

export const greenThemeClass = createButtonTheme({
  color: { brand: 'green' },
});
