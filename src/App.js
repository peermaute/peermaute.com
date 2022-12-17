import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Header from './components/Header';
import Body from './components/Body';

function App() {

  return (
    <div className={styles.app}>
      <NavBar/>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
