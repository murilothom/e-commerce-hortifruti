import React from "react";

import { Link } from "react-router-dom";

import styles from "./Cart.module.css";

import CartCardList from "./CartCardList";

const Cart = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.content} container`}>
        <div className={styles.titles}>
          <h1>
            Meu carrinho<span>.</span>
          </h1>
          <Link to="/">
            <h1 className={styles.buying}>Continuar comprando</h1>
          </Link>
        </div>
        <CartCardList />
      </div>
    </main>
  );
};

export default Cart;
