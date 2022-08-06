import React from "react";
import { Link } from "react-router-dom";

import { GiFruitBowl } from "react-icons/gi";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

import styles from "./Header.module.css";

import { ItemsContext } from "../context/ItemsContext";

const Header = () => {
  const { ids, setIds } = React.useContext(ItemsContext);

  function handleCleanUp() {
    setIds([]);
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/">
          <GiFruitBowl className={styles.icons} size={68} color="#92140c" />
        </Link>
        <div className={styles.cart}>
          {ids.length > 0 && <span className={styles.count}>{ids.length}</span>}
          <Link to="/cart">
            <FaShoppingCart
              className={styles.icons}
              size={52}
              color="#92140c"
            />
          </Link>
          <FaTrashAlt
            className={styles.icons}
            size={52}
            color="#92140c"
            onClick={handleCleanUp}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
