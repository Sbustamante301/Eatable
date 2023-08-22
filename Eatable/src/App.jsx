import { useState } from "react";
import LoadingScreen from "./components/loadingScreen";
import styles from "./styles/app.module.css";
import Button from "./components/button";
import Input from "./components/input";
import Form from "./pages/form";
function App() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.center}>
      <div className={styles.mobile}>
        <Form />
      </div>
    </main>
  );
}

export default App;
