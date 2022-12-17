import styles from "./Body.module.css";

const Body = () => {
    return (
        <div className={styles.body}>
            <hr></hr>
            <section className={styles.title}>
                <h1>Music</h1>
            </section>
            <hr></hr>
            <section className={styles.title}>
                <h1>Cooking</h1>
            </section>
            <hr></hr>
            <section className={styles.title}>
                <h1>Projects</h1>
            </section>
        </div>
    );
};

export default Body;