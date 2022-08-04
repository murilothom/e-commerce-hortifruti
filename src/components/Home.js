import React from "react";
import CardList from "./CardList";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.content} container`}>
        <h1>
          Suas compras de hortifrúti online<span>.</span>
        </h1>
        <CardList />
      </div>
    </main>
  );
};

export default Home;
