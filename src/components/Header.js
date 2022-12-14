import styles from "./Header.module.css";
import profilPic from "../images/me_profil_pic.jpg";

const Header = () => {
  return (
    <div>
      <hr id={styles.topHr}></hr>
      <header>
        <section className={styles.headerText}>
          <h1 className={styles.title}>Congrats, you found my website!</h1>
          <img id={styles.headerImageMiddle} src={profilPic} alt="Peer" />
          <p className={styles.subtitle}>
            Hi, my name is Peer and I'm studying computer science in Hamburg.
          </p>
        </section>
        <img id={styles.headerImageRight} src={profilPic} alt="Peer" />
        
      </header>
      <hr></hr>
    </div>
  );
};

export default Header;
