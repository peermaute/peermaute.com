import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <a className={styles.projectLink} href={props.link}>
      <div className={styles.project}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
      </div>
    </a>
  );
};

export default Project;
