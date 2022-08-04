import React from "react";
import { Link } from "react-router-dom";

import { GiFruitBowl } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

import styles from "./Header.module.css";

import { ItemsContext } from "../context/ItemsContext";

const Header = () => {
  const { countItems } = React.useContext(ItemsContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/">
          <GiFruitBowl className={styles.icons} size={68} color="#92140c" />
        </Link>
        <div className={styles.cart}>
          {countItems && <span className={styles.count}>{countItems}</span>}
          <Link to="/cart">
            <FaShoppingCart
              className={styles.icons}
              size={52}
              color="#92140c"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
