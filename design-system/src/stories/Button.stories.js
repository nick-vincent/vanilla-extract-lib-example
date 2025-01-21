import { Button } from './Button';
import { redThemeClass } from './button.css';

export default {
  title: 'Example/Button',
  component: Button,
};

export const Default = {
  args: {
    children: 'Button',
  },
};

export const Themed = {
  args: {
    children: 'Button',
    className: redThemeClass,
  },
};
