import { fetchData } from "../services/api-fetch";
import { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import styles from "../styles/products.module.css";
function Products() {
  const [data, setData] = useState([null]);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div className={styles.container}>
      {data?.map((product) => (
        <ProductCard
          key={product?.id}
          imgSrc={product?.picture_url}
          title={product?.name}
          price={`$${product?.price}`}
          // Aplica los estilos del módulo CSS al componente ProductCard
        />
      ))}
    </div>
  );
}

export default Products;
