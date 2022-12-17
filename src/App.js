import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {

  return (
    <div className={styles.app}>
      <NavBar/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
