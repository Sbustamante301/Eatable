import styles from "../styles/loadingScreen.module.css";
import Logo from "../components/logo";
const LoadingScreen = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.logoContainer}>
        <Logo />
        {/* <span className={styles.circumference}></span> */}
      </div>
    </div>
  );
};

export default LoadingScreen;
