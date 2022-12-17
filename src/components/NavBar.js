import styles from "./NavBar.module.css";

const NavBar = () => {
    return(
        <nav className={styles.navBar}>
            <a href="#music">Music</a>
            <p> | </p>
            <a href="#cooking">Cooking</a>
            <p> | </p>
            <a href="#projects">Projects</a>
            <p> | </p>
            <a href="#links">Links</a>
        </nav>
    );
}

export default NavBar;