import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={`${styles.content} container`}>
        Created by Murilo Thom &copy;
      </p>
    </footer>
  );
};

export default Footer;
