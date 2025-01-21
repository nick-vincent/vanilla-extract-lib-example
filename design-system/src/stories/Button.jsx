import { button } from './button.css.ts';

export const Button = (props) => {
  return (
    <button type="button" className={[button, props.className].join(' ')}>
      {props.children}
    </button>
  );
};
