import styles from '../styles/Home.module.css';
import logo from '../assets/logo couleur png.png';
import Image from "next/image";

function Home() {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <Image src={logo} alt="logo" />
        <h1 className={styles.title}>
          Votre partenaire en gestion de paie! 
        </h1>
      </main>
    </div>
  );
}

export default Home;
