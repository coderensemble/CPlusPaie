import styles from "../styles/Contact.module.css";
import Image from "next/image";
import carteVisite from "../assets/image 6.png";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <button className={styles.button} onClick={openPopup}>
          Demande de devis
        </button>
        {isPopupOpen && (
          <div className={styles.popup}>
            <div className={styles.contactForm}>
              <p className={styles.heading}>Contact Me</p>
              <FontAwesomeIcon onClick={openPopup} icon={faSquareXmark} />
              <div className={styles.inputContainer}>
                <input className={styles.input} type="text" placeholder="Your Name" />
                <input className={styles.input} type="email" placeholder="Your Email" />
                <textarea className={styles.textarea} placeholder="Your Message"></textarea>
                <button className={styles.button}>Send Message</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.imageContainer}>
        <Image src={carteVisite} alt="carteVisite" />
      </div>
    </div>
  );
}

export default Contact;
