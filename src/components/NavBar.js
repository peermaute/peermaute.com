import styles from "./NavBar.module.css";

const NavBar = () => {
    return(
        <nav className={styles.navBar}>
            <a href="#cooking">Music</a>
            <p> | </p>
            <a href="#music">Cooking</a>
            <p> | </p>
            <a href="#socialLink">Links</a>
        </nav>
    );
}

export default NavBar;