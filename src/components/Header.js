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
        <Link className={styles.logo} to="/">
          Horti<span>fruti</span>{" "}
        </Link>
        <div className={styles.iconsCards}>
          {ids.length > 0 && <span className={styles.count}>{ids.length}</span>}
          <Link to="/cart">
            <FaShoppingCart className={styles.icons} size={34} color="#fff" />
          </Link>
          <FaTrashAlt
            className={styles.icons}
            size={30}
            color="#fff"
            onClick={handleCleanUp}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
