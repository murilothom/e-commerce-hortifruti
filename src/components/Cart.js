import React from "react";

import styles from "./Cart.module.css";

import CartCardList from "./CartCardList";

const Cart = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.content} container`}>
        <h1>
          Meu carrinho<span>.</span>
        </h1>
        <CartCardList />
      </div>
    </main>
  );
};

export default Cart;
