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
              ea commodo consequat.
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
              ea commodo consequat. 
            </p>
          </div>
        </div>,
        <div className={styles.carouselItem}>
          <Image src={project4} alt="Image 4" />
          <div className={styles.imageTitle}>
            <h2 className={styles.title}>Morgane SAULNIER – Responsable paie</h2>
            <h3 className={styles.titlePos}>Remplacement provisoire et projet de transition en collaboration le nouveau responsable paie</h3>
            <p className={styles.description}>
            En attendant mon recrutement, Carole a effectué en autonomie les paies des 400 collaborateurs de la société.
Nous avons ensuite travaillé ensemble de juin 2023 à aout 2023, soit 3 mois d’expérience riche et intense avec une transmission de l’intégralité des spécificités de chaque dossier.
Un travail d’audit a tout d’abord été effectué par Carole sur les différentes sociétés, puis elle a été force de proposition concernant les différents paramétrages existants.
Son expertise en paie a permis de limiter les erreurs et d’apporter un cadre rassurant durant mes premiers mois d’intégration. 
Carole a le recul nécessaire pour traiter les situations complexes, régularisations en tout genre, et limiter les litiges avec les salariés.
J’ai aimé allier mon expérience et mes pratiques aux siennes.
Pendant notre collaboration, elle s’est rendue réactive, disponible et a été un réel soutien supplémentaire durant les périodes de paie.
            </p>
          </div>
        </div>,
      ];

      return (
        <div className={styles.mainContainer}>
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
