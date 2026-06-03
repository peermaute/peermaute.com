import styles from "./App.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
