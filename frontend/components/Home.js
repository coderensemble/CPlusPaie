import styles from '../styles/Home.module.css';
import logo from '../assets/logoBlancC+Paie.png';
import Image from "next/image";

function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.secondContainer}>
        <div className={styles.logo}>
        <Image src={logo} alt="logo" />
        </div>
        <h1 className={styles.title}>
          Votre partenaire en gestion de paie! 
        </h1>
        <div className={styles.pres}>Optimisez votre performance en choisissant un collaborateur sur mesure, alliant compétence, flexibilité, proximité et répondant parfaitement à vos besoins paie, social et RH. </div>
      </div>
    </div>
  );
}

export default Home;
