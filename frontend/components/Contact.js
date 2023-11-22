import styles from "../styles/Contact.module.css";
import Image from "next/image";
import carteVisite from "../assets/Carte de visite CF.png";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import VirevoltantTitle from "./VirevoltantTitle";

function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionTitle}>
        <VirevoltantTitle title="CONTACT" />
      </div>
      <div>
      <div className={styles.textContainer}>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
          voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
          pariatur?
        </p>
        <button className={styles.button} onClick={openPopup}>
          Demande de devis
        </button>
        </div>
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
      <div className={styles.bloc}>
      <div className={styles.imageContainer}>
        <div className={styles.image1Container}><Image className={styles.carteVisite1} src={carteVisite} alt="carteVisite1" /></div>
        <div className={styles.image2Container}><Image className={styles.carteVisite2} src={carteVisite} alt="carteVisite2" /></div>
        <div className={styles.image3Container}><Image className={styles.carteVisite3} src={carteVisite} alt="carteVisite3" /></div>
        <div className={styles.image4Container}><Image className={styles.carteVisite4} src={carteVisite} alt="carteVisite4" /></div>
      </div>
      </div>
    </div>
  );
}

export default Contact;
