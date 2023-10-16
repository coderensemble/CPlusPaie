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
      <div className={styles.contentMenu}>
        <Link href="/#section1" className={styles.section}>
          QUESTION
        </Link>
      </div>
      <div className={styles.contentMenu}>
        <Link href="/#section2" className={styles.section}>
          TEMOIGNAGES
        </Link>
      </div>
      <div className={styles.contentMenu}>
        <Link href="/#section3" className={styles.section}>
          ABOUT ME
        </Link>
      </div>
      <div className={styles.contentMenu}>
        <Link href="/#section4" className={styles.section}>
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Header;
