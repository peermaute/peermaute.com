import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <NavBar />
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
