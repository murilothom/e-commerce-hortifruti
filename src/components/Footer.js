import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={`${styles.content} container`}>
        Criado por{" "}
        <a href="https://murilothom.com" rel="noreferrer" target="_blank">
          Murilo Thom
        </a>
      </p>
    </footer>
  );
};

export default Footer;
