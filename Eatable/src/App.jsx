import { useState, useEffect } from "react";
import LoadingScreen from "./pages/loadingScreen";
import styles from "./styles/app.module.css";
import Button from "./components/button";
import Input from "./components/input";
import Form from "./pages/form";
import Products from "./pages/products";
import ProductCard from "./components/productCard";
function App() {
  const [showView, setShowView] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowView(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.center}>
      <div className={styles.mobile}>
        {showView ? <LoadingScreen /> : <Products />}
      </div>
    </main>
  );
}

export default App;
