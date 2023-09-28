import styles from "../styles/Contact.module.css";
import Image from "next/image";
import carteVisite from "../assets/image 6.png";

function Contact() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contactForm}>
        <p className={styles.heading}>Contact Me</p>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Your Name"
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className={styles.textarea}
            placeholder="Your Message"
          ></textarea>
          <button className={styles.button}>Send Message</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={carteVisite} alt="carteVisite" />
      </div>
    </div>
  );
}

export default Contact;
