import styles from "../styles/Temoignages.module.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";


function Temoignages() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    return () => {
      setIsClient(false); // Détruire l'état lorsque le composant est démonté
    };
  }, []);

  const renderCarousel = () => {
    if (isClient) {
      // Charger la bibliothèque uniquement côté client
      const Carousel = require("3d-react-carousal").Carousel;
      const project2 = require("../assets/Linamar_Logo.png");
      const project3 = require("../assets/logoVertycal.png");
      const project4 = require("../assets/le_pack_logo.png");

      let slides = [
        <div className={styles.carouselItem}>
          <Image src={project2} alt="Image 2" />
          <div className={styles.imageTitle}>Titre de l'image 2</div>
        </div>,
        <div className={styles.carouselItem}>
          <Image src={project3} alt="Image 3" />
          <div className={styles.imageTitle}>Titre de l'image 3</div>
        </div>,
        <div className={styles.carouselItem}>
          <Image src={project4} alt="Image 4" />
          <div className={styles.imageTitle}>Titre de l'image 4</div>
        </div>,
      ];

      return (
        <div className={styles.body}>
          <div className={styles.carousel}>
            <Carousel slides={slides} autoplay={true} interval={5000} arrows={false}/>
          </div>
        </div>
      );
    }
    return;
  };

  return renderCarousel();
}

export default Temoignages;
