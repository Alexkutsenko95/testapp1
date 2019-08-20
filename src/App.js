import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Button from './components/Button';

function App() {

  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
          <div>
              <Button variant={'primary'}>First Button</Button>
              <Button variant={'error'}>Second Button</Button>
              <Button>Non variant</Button>
              <Button variant={'dark'}>Third Button</Button>
          </div>
      </header>
    </div>
  );
}

export default App;
