import styles from '../styles/Home.module.css';
import logo from '../assets/image 5.png';
import Image from "next/image";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Image src={logo} alt="logo" />
        <h1 className={styles.title}>
          Welcome to 
        </h1>
      </main>
    </div>
  );
}

export default Home;
