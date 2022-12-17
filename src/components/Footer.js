import styles from "./Footer.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className={styles.footer} id="links">
      <a
        className={styles.iconLink}
        href="https://github.com/peermaute"
      >
        <i className={styles.icon + " bi bi-github"} id={styles.githubIcon}></i>
      </a>
      <a
        className={styles.iconLink}
        href="https://de.linkedin.com/in/peer-maute-1461aa1a5"
      >
        <i className={styles.icon + " bi bi-linkedin"} id={styles.linkedinIcon}></i>
      </a>
      <a className={styles.iconLink} href="mailto:peermaute@gmail.com">
        <i className={styles.icon + " bi bi-envelope-fill"} id={styles.mailIcon}></i>
      </a>
    </footer>
  );
};

export default Footer;
