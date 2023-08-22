import eatableImage from "../assets/eatable.svg";
import eatableBackground from "../assets/eatableimage.jpg";
import food from "../assets/food4.svg";
import elipse from "../assets/Ellipse 16.svg";
import styles from "../styles/loadingScreen.module.css";
import Logo from "../components/logo";
const LoadingScreen = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "1.25rem",
        boxShadow: "0 0.25rem 1.875rem rgb(0 0 0/6%)",
        backgroundImage: `url(${eatableBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.logoContainer}>
        <Logo />
        {/* <span className={styles.circumference}></span> */}
      </div>
    </div>
  );
};

export default LoadingScreen;
