import styles from "../styles/Question.module.css";
import profilPict from "../assets/Q1Carole.jpeg";
import Image from "next/image";

function Question() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.img1}>
          <Image src={profilPict} alt="profilPict" />
        </div>
        <div className={styles.textContainer1}>
          <h3>Titre</h3>
          <p>Question</p>
        </div>
        <div className={styles.textContainer2}>
          <h3>Titre</h3>
          <p>Question</p>
        </div>
        <div className={styles.divImg2}>
          <div className={styles.img2}></div>
        </div>
        <div className={styles.divImg3}>
          <div className={styles.img3}></div>
        </div>
        <div className={styles.textContainer3}>
          <h3>Titre</h3>
          <p>Question</p>
        </div>
      </div>
    </div>
  );
}

export default Question;
