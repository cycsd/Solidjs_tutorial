import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Card from './components/Card';

const App: Component = () => {
  return (
    <div class="container m-auto">
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
      <div class="grid grid-cols-4 gap-10 my-4">
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
};

export default App;
