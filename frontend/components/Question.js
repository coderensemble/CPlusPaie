import styles from "../styles/Question.module.css";
import profilPict from "../assets/Q1Carole.jpeg";
import Image from "next/image";
import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

function Question() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.img1}>
          <Image src={profilPict} alt="profilPict" />
        </div>
        <div className={styles.textContainer1}>
          <h3 className={styles.title}>Titre de la mission</h3>
          <h3 className={styles.question}>Vous êtes une TPE/PME et avez besoin d’un expert paie et RH dédié quelques heures par semaine ? Vous êtes un expert-comptable et n’avez pas de service social ?</h3>
          <LoremIpsum p={2} className={styles.text}/>
          <h3>Avantage</h3>
        </div>
        <div className={styles.textContainer2}>
          <h3 className={styles.title}>Titre de la mission</h3>
          <h3 className={styles.question}>Question 2</h3>
          <LoremIpsum p={2} className={styles.text}/>
          <h3>Avantage</h3>
        </div>
        <div className={styles.divImg2}>
          <div className={styles.img2}></div>
        </div>
        <div className={styles.divImg3}>
          <div className={styles.img3}></div>
        </div>
        <div className={styles.textContainer3}>
          <h3 className={styles.title}>Titre de la mission</h3>
          <h3 className={styles.question}>Question 3</h3>
          <LoremIpsum p={2} className={styles.text}/>
          <h3>Avantage</h3>
        </div>
      </div>
    </div>
  );
}

export default Question;
