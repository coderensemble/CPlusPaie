import styles from "../styles/Temoignages.module.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import VirevoltantTitle from "./VirevoltantTitle";

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
          <div className={styles.imageTitle}>
            <h2 className={styles.title}>Titre de l'image 2</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>,
        <div className={styles.carouselItem}>
          <Image src={project3} alt="Image 3" />
          <div className={styles.imageTitle}>
            <h2 className={styles.title}>Titre de l'image 3</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>,
        <div className={styles.carouselItem}>
          <Image src={project4} alt="Image 4" />
          <div className={styles.imageTitle}>
            <h2 className={styles.title}>Titre de l'image 4</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>,
      ];

      return (
        <div className={styles.body}>
          <div className={styles.sectionTitle}>
            <VirevoltantTitle title="TEMOIGNAGES" />
          </div>
          <div className={styles.carousel}>
            <Carousel slides={slides} autoplay={true} interval={5000} arrows={false} />
          </div>
        </div>
      );
    }
    return;
  };

  return renderCarousel();
}

export default Temoignages;
