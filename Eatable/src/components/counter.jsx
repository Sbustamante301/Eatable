import styles from "../styles/counter.module.css";
import React, { useState } from "react";
import Button from "./button";
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className={styles.countButton}>
      <button className={styles.decrease} onClick={count ? decrement : null}>
        -
      </button>
      <span>{count}</span>
      <button className={styles.increase} onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
