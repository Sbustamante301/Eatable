import styles from "../styles/input.module.css";

const Input = ({ title, placeholder, textType }) => {
  return (
    <div className={styles.containerInput}>
      <label className={styles.label}>{title}</label>
      <input
        className={styles.input}
        placeholder={placeholder}
        type={textType}
      />
    </div>
  );
};

export default Input;
