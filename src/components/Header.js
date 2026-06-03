import styles from "./Header.module.css";
import profilPic from "../images/tea-profile-pic.png";

const Header = () => {
  return (
    <header className={styles.headElement}>
      <img className={styles.profilePic} src={profilPic} alt="Peer" />
      <div className={styles.textSection}>
        <h1 className={styles.name}>Peer Maute</h1>
        <p className={styles.tagline}>
          Software Developer & IT Consultant at Netlight, Hamburg
        </p>
      </div>
    </header>
  );
};

export default Header;
