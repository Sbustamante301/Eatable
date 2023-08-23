import { useState, useEffect } from "react";
import LoadingScreen from "./pages/loadingScreen";
import styles from "./styles/app.module.css";
import Button from "./components/button";
import Input from "./components/input";
import Form from "./pages/form";

function App() {
  const [showView, setShowView] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowView(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.center}>
      <div className={styles.mobile}>
        {showView ? <LoadingScreen /> : <Form />}
      </div>
    </main>
  );
}

export default App;
