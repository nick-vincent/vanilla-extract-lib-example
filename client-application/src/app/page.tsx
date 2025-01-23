import { Button } from '../../../design-system/dist/index';
import { redThemeClass } from '../../../design-system/dist/index';
import { greenThemeClass } from './page.css';

import '../../../design-system/dist/style.css';

export default function Home() {
  return (
    <div>
      <p>
        <Button>Click me</Button>
      </p>
      <p className={redThemeClass}>
        <Button>Themed</Button>
      </p>
      <p className={greenThemeClass}>
        <Button>Themed</Button>
      </p>
    </div>
  );
}
