import styles from "../styles/AboutMe.module.css"
import Image from "next/image";
import profilPict from "../assets/carole.jpeg"


function AboutMe() {
    return(
        <div className={styles.mainContainer}>
            <div >
            <div className={styles.containerPict}>
                {/* <Image src={profilPict} alt="profilPict" /> */}
            </div>
            <div>
                <p>Text</p>
            </div>
            </div>
        </div>
    );
}

export default AboutMe;