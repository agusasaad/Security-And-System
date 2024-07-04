import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}
