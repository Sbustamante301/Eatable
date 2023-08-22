import eatableImage from "../assets/eatable.svg";
import food from "../assets/food4.svg";
import elipse from "../assets/Ellipse 16.svg";
import styles from "../styles/loadingScreen.module.css";
const LoadingScreen = () => {
  return (
    <div className={styles.logoContainer}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <img src={eatableImage} alt="imagen eatable" />
        <img style={{ width: "5em" }} src={food} alt="imagen eatable" />
      </div>
      <span className={styles.circumference}></span>
    </div>
  );
};

export default LoadingScreen;
