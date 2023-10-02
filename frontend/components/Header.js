import styles from "../styles/Header.module.css";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className={styles.menu}>
      <div className={styles.contentMenu}>
        <Link href="/" className={styles.section}>
          HOME
        </Link>
      </div>
      <Link href="/#section1" className={styles.section}>
        <div className={styles.contentMenu}>QUESTION</div>
      </Link>
      <Link href="/#section2" className={styles.section}>
        <div className={styles.contentMenu}>TEMOIGNAGES</div>
      </Link>
      <Link href="/#section3" className={styles.section}>
        <div className={styles.contentMenu}>ABOUT ME</div>
      </Link>
      <Link href="/#section4" className={styles.section}>
        <div className={styles.contentMenu}>CONTACT</div>
      </Link>
    </div>
  );
}

export default Header;
