import styles from "../styles/button.module.css";
const Button = ({ title }) => {
  return (
    <button className={`${styles.button} ${styles["m-2"]}`}>{title}</button>
  );
};

export default Button;
