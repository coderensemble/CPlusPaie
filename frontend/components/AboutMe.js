import styles from "../styles/AboutMe.module.css"
import Image from "next/image";


function AboutMe() {
    return(
        <div>
            <div className={styles.containerPict}>
                {/* <Image src="" alt="" /> */}
            </div>
            <div>
                <p>Text</p>
            </div>
        </div>
    );
}

export default AboutMe;