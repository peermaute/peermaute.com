import styles from "./Body.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  return (
    <div className={styles.body}>
      <hr></hr>
      <section className={styles.sectionElement} id="music">
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
        <a
          className={styles.iconLink}
          href="https://open.spotify.com/user/fireflies13?si=PyLH-T4iSrKnImPbaXzWHg&utm_source=copy-link"
        >
          <i className={styles.icon + " bi bi-spotify"}></i>
        </a>
      </section>
      <hr></hr>
      <section className={styles.sectionElement} id="cooking">
        <article className={styles.articleElement}>
          <h1 className={styles.title}>Cooking</h1>
          <p>
            Cooking always used to be another passion of mine. This obviously
            comes with the daily struggle of trying to decide what to make for
            dinner, especially when you have a limited selection of ingredients
            on hand. That's why I created an API that helps you find recipe
            ideas based on the ingredients you have in your fridge. Simply input
            the items you have available, and the API will provide a list of
            recipe options for you to try. While the database for the API is
            still in its early stages and may not yet have a vast selection of
            recipes, it does include some of my personal heavy rotation meals.
            These are tried-and-true recipes that I make on a regular basis, and
            I hope they can provide some inspiration for your own cooking
            adventures. In addition to finding recipe ideas, the API also has a
            meal planning feature. Input your dietary preferences and the API
            will generate a personalized meal plan for the week.
          </p>
        </article>
        <a
          className={styles.iconLink}
          href="https://api.mealsquare.peermaute.com/"
        >
          <FontAwesomeIcon icon={faUtensils} className={styles.icon} id={styles.cookingIcon}/>
        </a>
      </section>
      <hr></hr>
      <section className={styles.sectionElement} id="projects">
        <h1 className={styles.title}>Projects</h1>
      </section>
    </div>
  );
};

export default Body;
