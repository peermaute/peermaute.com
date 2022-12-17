import styles from "./Body.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Body = () => {
  return (
    <div className={styles.body}>
      <hr></hr>
      <section className={styles.sectionElement}>
        <article className={styles.articleElement}>
          <h1 className={styles.title}>Music</h1>
          <p>
            Music is something that has always played a significant role in my
            life. I am currently a member of the chamber choir at the University
            of Hamburg. In addition to singing, I also enjoy playing instruments
            such as the piano and guitar. If you'd like to take a peek into my
            more or less exquisite taste in music, you can check out my Spotify
            playlists by clicking on the icon.
          </p>
        </article>
        <a className={styles.iconLink} href="https://open.spotify.com/user/fireflies13?si=PyLH-T4iSrKnImPbaXzWHg&utm_source=copy-link">
          <i className="bi bi-spotify" id={styles.spotifyIcon}></i>
        </a>
      </section>
      <hr></hr>
      <section className={styles.sectionElement}>
        <h1 className={styles.title}>Cooking</h1>
        <p></p>
      </section>
      <hr></hr>
      <section className={styles.sectionElement}>
        <h1 className={styles.title}>Projects</h1>
      </section>
    </div>
  );
};

export default Body;
