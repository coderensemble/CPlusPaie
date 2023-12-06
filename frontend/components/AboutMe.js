import styles from "../styles/AboutMe.module.css";
import Image from "next/image";
import profilPict from "../assets/carole.jpeg";
import VirevoltantTitle from "./VirevoltantTitle";

function AboutMe() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionTitle}>
        <VirevoltantTitle title="A PROPOS" />
      </div>
      <div className={styles.containerPict}>
        <Image src={profilPict} alt="profilPict" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textAboutMe}>Diplômée d’une école de commerce, spécialité RH, en 2009 et d’un titre de de gestionnaire de paie l’année suivante, je travaille dans le domaine de la paie et des ressources humaines depuis plus de 10 ans. Mon expérience est riche et diversifiée, ayant travaillé aussi bien en cabinet comptable qu’en entreprise ou encore au sein de prestataire paie. Cela m’a permis d’acquérir de nombreuses compétences techniques dans le domaine de la paie avec des problématiques variées et un conseil de qualité auprès d’entreprises comptant de 1 à environ 1000 salariés.
<br/><br/>En 2022, je prends un tournant professionnel en décidant de travailler en direct avec les entreprises et notamment les cabinets comptables. Cela me correspond mieux pouvant proposer un service sur mesure qui répond réellement aux besoins de chacun. J’aime le challenge, la diversité et l’adaptabilité…le travail répétitif et standardisé n’était pas pour moi.
<br/><br/>J’adore mon métier et me forme constamment pour être à jour de la législation. Mon réseau me permet également d’être entourée de personnes compétentes et de m’appuyer sur un conseil de qualité. 
<br/><br/>Ce virage professionnel m’a également permis de vivre pleinement mes passions à savoir la nature, le trail et le ski, en m’installant en Haute Savoie. Cela ne m’empêche pas d’être relativement mobile, rencontrant régulièrement mes clients, à Lyon, Annecy ou même en Haute Loire…je serai ravie de me déplacer également dans d’autres régions de France.
<br/><br/>A très bientôt !
</div>
      </div>
    </div>
  );
}

export default AboutMe;
