import styles from "../styles/AboutMe.module.css";
import Image from "next/image";
import profilPict from "../assets/carole.jpeg";
import VirevoltantTitle from "./VirevoltantTitle";

function AboutMe() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionTitle}>
        <VirevoltantTitle title="A PROPOS" />
      </div>
      <div className={styles.containerPict}>
        <Image src={profilPict} alt="profilPict" />
      </div>
      <div className={styles.textContainer}>
        <p>TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

export default AboutMe;
