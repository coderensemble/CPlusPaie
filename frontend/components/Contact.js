import styles from "../styles/Contact.module.css";
import Image from "next/image";
import carteVisite from "../assets/image 6.png";

function Contact() {
  return (
    <div>
      <div>
        <div>
          <p>Text</p>
          <button>Bouton</button>
        </div>
        <Image src={carteVisite} alt="carteVisite" />
      </div>
    </div>
  );
}

export default Contact;
