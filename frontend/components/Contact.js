import styles from "../styles/Contact.module.css";
import Image from "next/image";
import carteVisite from "../assets/Carte de visite CF.png";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import VirevoltantTitle from "./VirevoltantTitle";

function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const openPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const resetFormAndClosePopup = () => {
    setFormData({
      name: "",
      email: "",
      telephone: "",
      ccn:"",
      message: "",
    });
    setIsPopupOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      console.log("Form Data before sending:", formData);
      const response = await fetch("http://localhost:3000/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        resetFormAndClosePopup();
        // Ajoutez ici le code pour gérer le succès de l'envoi du courriel
      } else {
        console.error("Failed to send email.");
        // Ajoutez ici le code pour gérer l'échec de l'envoi du courriel
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Ajoutez ici le code pour gérer les erreurs d'envoi du courriel
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionTitle}>
        <VirevoltantTitle title="CONTACT" />
      </div>
      <div className={styles.textButton}>
        <div className={styles.textContainer}>
          <p>
            Comme chaque mission est unique, je vous invite à remplir le questionnaire ci-dessous pour comprendre votre
            besoin, voire si je peux y répondre et vous proposer un devis cohérent et sur-mesure.<br/><br/> Je m’engage à vous
            recontacter dans les 48 heures. <br/><br/>A très vite pour une future collaboration.
          </p>
          <button className={styles.button} onClick={openPopup}>
            Demande de devis
          </button>
        </div>
        {isPopupOpen && (
          <div className={styles.popup}>
            <div className={styles.contactForm}>
              <p className={styles.heading}>Contactez Moi</p>
              <FontAwesomeIcon onClick={openPopup} icon={faSquareXmark} />
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Nom de société"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <div className={styles.contact}>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Téléphone"
                  name="email"
                  value={formData.telephone}
                  onChange={handleInputChange}
                />
                </div>
                <div className={styles.contact}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="CCN"
                  name="ccn"
                  value={formData.ccn}
                  onChange={handleInputChange}
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Nombre de salariés"
                  name="ccn"
                  value={formData.nbrSalaries}
                  onChange={handleInputChange}
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Durée de la mission"
                  name="ccn"
                  value={formData.duree}
                  onChange={handleInputChange}
                />
                </div>
                <textarea
                  className={styles.textarea}
                  placeholder="La mission demandée en quelques mots"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}></textarea>
                <button onClick={() => handleSubmit()} className={styles.button}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.bloc}>
        <div className={styles.imageContainer}>
          <div className={styles.image1Container}>
            <Image className={styles.carteVisite1} src={carteVisite} alt="carteVisite1" />
          </div>
          <div className={styles.image2Container}>
            <Image className={styles.carteVisite2} src={carteVisite} alt="carteVisite2" />
          </div>
          <div className={styles.image3Container}>
            <Image className={styles.carteVisite3} src={carteVisite} alt="carteVisite3" />
          </div>
          <div className={styles.image4Container}>
            <Image className={styles.carteVisite4} src={carteVisite} alt="carteVisite4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
