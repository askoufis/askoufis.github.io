import { useState } from 'react';
// @ts-expect-error
import reactLogo from './assets/react.svg';
import { Box } from '@askoufis/system';
import { sprinkles } from '@askoufis/system/css';
import * as styles from './App.css';
import clsx from 'clsx';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img
            src='/vite.svg'
            className={clsx([styles.logo, styles.viteHover])}
            alt='Vite logo'
          />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img
            src={reactLogo}
            className={clsx([styles.logo, styles.reactHover, styles.logoSpin])}
            alt='React logo'
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div
        className={sprinkles({
          color: 'blue-200',
          background: 'gray-700',
          paddingTop: 'large',
        })}
      >
        foo
      </div>
      <div className={styles.card}>
        <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Box />
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more. A change.
      </p>
    </div>
  );
};

export default App;
