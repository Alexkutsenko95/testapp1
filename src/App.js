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
              <Button background={'red'}>First Button</Button>
              <Button className={styles.tmp}>Second Button</Button>
              <Button primary>Third Button</Button>
          </div>
      </header>
    </div>
  );
}

export default App;
