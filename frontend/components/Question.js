import styles from "../styles/Question.module.css";
import profilPict from "../assets/Q1Carole.jpeg";
import Image from "next/image";


function Question() {
  return (
    <div>
      <div className={styles.blocPictText}>
        <div className={styles.img1}><Image src={profilPict} alt="profilPict" /></div>
        <div className={styles.textContainer}>
          <h3>Titre</h3>
          <p>Question</p>
        </div>
      </div>
      <div className={styles.blocPictText}>
        <div className={styles.textContainer}>
          <h3>Titre</h3>
          <p>Question</p>
        </div>
        <div className={styles.img2}></div>
      </div>
      <div className={styles.blocPictText}>
        <div className={styles.img3}></div>
        <div className={styles.textContainer}>
          <h3>Titre</h3>
          <p>Question</p>
        </div>
      </div>
    </div>
  );
}

export default Question;
