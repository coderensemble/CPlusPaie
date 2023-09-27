import styles from "../styles/Question.module.css";

function Question() {
  return (
    <div>
      <div className={styles.blocPictText}>
        <div className={styles.img1}></div>
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
