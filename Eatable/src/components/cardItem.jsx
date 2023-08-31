import Counter from "./counter";
import foodimg from "../assets/foodcartimage.svg";
import styles from "../styles/cardItem.module.css";
function CardItem({ src, title, price }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImg} src={src} />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.price}>${price}</h2>
      </div>
      <Counter />
    </div>
  );
}

export default CardItem;
