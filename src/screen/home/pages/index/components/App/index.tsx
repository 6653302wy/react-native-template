import { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import styles from './styles.css';

export const App: FC = (): ReactElement => {
  const [count, setCounter] = useState(0);

  const onBtnClick = useCallback(() => {
    setCounter((pre) => {
      return pre + 1;
    });
  }, []);

  // when count update
  useEffect(() => {
    console.log('oh, state count has updated!!!');
  }, [count]);

  // when deps is empty, it means component initliaze
  useEffect(() => {
    setCounter(1);
  }, []);

  return (
    <div className={styles.wrapper}>
      <p>{count}</p>
      <button onClick={onBtnClick}>click me</button>
    </div>
  );
};

App.displayName = 'App';