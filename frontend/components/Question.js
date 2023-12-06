/** @jsxImportSource react **/

import styles from "../styles/Question.module.css";
import extPict from "../assets/externalisation.jpeg";
import replacePict from "../assets/Replace.jpeg";
import collabPict from "../assets/collaboration.jpeg";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import VirevoltantTitle from "./VirevoltantTitle";

function Question() {
  const imgRef1 = useRef(null);
  const textRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const textRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const textRef3 = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Vous pouvez ajuster ce seuil selon vos besoins
    };

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible1(true);
          imgRef1.current.classList.add(styles.slideInImage);
          textRef1.current.classList.add(styles.slideInText);
        }
      });
    }, options);

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
          textRef2.current.classList.add(styles.slideInTextG);
          imgRef2.current.classList.add(styles.slideInImageD);
        }
      });
    }, options);

    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible3(true);
          imgRef3.current.classList.add(styles.slideInImage);
          textRef3.current.classList.add(styles.slideInText);
        }
      });
    }, options);

    // Observez le composant actuel
    observer1.observe(imgRef1.current);
    observer1.observe(textRef1.current);
    observer2.observe(textRef2.current);
    observer2.observe(imgRef2.current);
    observer3.observe(imgRef3.current);
    observer3.observe(textRef3.current);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionTitle}>
        <VirevoltantTitle title="MES MISSIONS" />
      </div>
      <div className={styles.grid}>
        <div className={styles.div1}>
          <div className={styles.divImg1}>
            <div className={`${styles.title1} ${isVisible1 ? styles.slideInText : ""}`} ref={textRef1}>
              <h3>Externalisation Paie et Social</h3>
            </div>
            <div className={`${styles.img1} ${isVisible1 ? styles.slideInImage : ""}`} ref={imgRef1}>
              <Image src={extPict} alt="extPict" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.glowWrap}>
              <div className={styles.glow}></div>
            </div>
          </div>
          <div className={styles.textContainer1}>
            <h3 className={styles.question}>
              Vous êtes une TPE/PME et avez besoin d’un expert paie et RH dédié quelques heures par semaine ? Vous êtes
              un expert-comptable et n’avez pas de service social ?
            </h3>
            <div className={styles.answer}>
              <div>
                <p>Je me charge de l’ensemble de la gestion de votre volet RH:</p>
                <br />
              </div>
              <div className={styles.liste}>
                <ul>
                  <li>DPAE + contrat de travail + avenants…</li>
                  <li>Etablissement mensuel du bulletin de paie et de la DSN</li>
                  <li>Mise en place des procédures de rupture et STC</li>
                  <li>Suivi des obligations et de la règlementation en vigueur</li>
                  <li>Conseil sur l’affichage obligatoire, le DUERP, les visites d’information et de prévention…</li>
                </ul>
              </div>
            </div>
            <h3 className={styles.avantage}>
              Avantage: je me charge personnellement de votre entreprise et m’adapte à votre besoin.
            </h3>
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.divImg2}>
            <div className={`${styles.title2} ${isVisible2 ? styles.slideInTextG : ""}`} ref={textRef2}>
              <h3>Service de remplacement sur mesure</h3>
            </div>
            <div className={`${styles.img2} ${isVisible2 ? styles.slideInText : ""}`} ref={imgRef2}>
              <Image src={replacePict} alt="replacePict" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.glowWrap2}>
              <div className={styles.glow2}></div>
            </div>
          </div>
          <div className={styles.textContainer2}>
            <h3 className={styles.question}>
              Vous êtes un cabinet comptable et avez besoin d’une flexibilité dans la gestion de votre équipe sociale ou
              êtes à la recherche d’une compétence clef à temps partagé ?
            </h3>
            <div className={styles.answer}>
            <p>Je m’adapte à vos besoins et créé une offre sur mesure, évolutive suivant la vie de votre cabinet :</p> 
            <br />
              <ul>
                <li>
                  Responsable paie à temps partagé : un véritable support pour les questions techniques paie ou les
                  prises de position sur des sujets complexes, une formation des équipes avec une veille paie et social
                  mensuelle
                </li>
                <li>
                  Remplacement provisoire des gestionnaires de paie en cas de maladie, départs imprévus, arrivée massive
                  de nouveaux clients…
                </li>
                <li>
                  Accompagnement sur des missions précises : élection CSE, audit paie et social, accord d’intéressement…
                </li>
              </ul>
            </div>
            <h3 className={styles.avantage}>
              L’avantage : optimiser vos coûts, tout en apportant un service de qualité à vos clients et une
              tranquillité de travail à vos équipes.
            </h3>
          </div>
        </div>
        <div className={styles.div3}>
          <div className={styles.divImg3}>
            <div className={`${styles.title3} ${isVisible3 ? styles.slideInText : ""}`} ref={textRef3}>
              <h3>Accompagnement de projet</h3>
            </div>
            <div className={`${styles.img3} ${isVisible3 ? styles.slideInImage : ""}`} ref={imgRef3}>
              <Image src={collabPict} alt="replacePict" layout="fill" objectFit="cover" />
            </div>
            <div className={styles.glowWrap3}>
              <div className={styles.glow3}></div>
            </div>
          </div>
          <div className={styles.textContainer3}>
            <h3 className={styles.question}>
              Vous avez besoin d’un accompagnement sur un projet paie clef ? Vous avez besoin d’un consultant paie dédié
              sur une période de courte durée ?
            </h3>
            <div className={styles.answer}>
              Je peux piloter divers projets paie : - Mise en place d’un nouveau logiciel et/ou SIRH - Remplacement ou
              accompagnement provisoire de votre responsable paie - Audit des pratiques et de la conformité de votre
              paie…
            </div>
            <h3 className={styles.avantage}>
              L’avantage : j’interviens sur une période définie pouvant aller d’un mois à plusieurs mois en apportant
              une expertise sur un domaine précis, difficile à trouver sur le marché actuel du travail temporaire.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
