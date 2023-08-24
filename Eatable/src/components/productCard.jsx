import foodimg from "../assets/foodcartimage.svg";
import styles from "../styles/productCard.module.css";
const ProductCard = ({ imgSrc, title, price }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={imgSrc} />
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.price}>{price}</h2>
    </div>
  );
};

export default ProductCard;
