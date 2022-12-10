import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Header from './components/Header';

function App() {
  return (
    <div className={styles.app}>
      <NavBar/>
      <Header/>
    </div>
  );
}

export default App;
