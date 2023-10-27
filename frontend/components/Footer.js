import styles from "../styles/Footer.module.css";
import Image from "next/image";
import linkedin from "../assets/linkedin_icon.png";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMeContainer}>
        <div>
        <ul className={styles.list}>
          <li>Carole Forestier</li>
          <li>carol.forestier@gmail.com</li>
          <li>06 89 94 90 80</li>
        </ul>
        </div>
        <div className={styles.law}>Mention légales - Politique de confidentialité</div>
        <div className={styles.linkedIn}>
          <Image src={linkedin} alt="Linkedin" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
