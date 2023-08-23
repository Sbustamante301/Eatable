import Input from "../components/input";
import Button from "../components/button";
import Logo from "../components/logo";
import styles from "../styles/form.module.css";
import { useState } from "react";
const authenticationForm = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <>
      <div className={styles.containerForm}>
        <header className={styles.header}>
          <Logo margin="10rem" />
          <div className={styles.buttonsContainer}>
            <h1
              className={`${styles.login} ${
                activeButton === "login" ? styles.active__button : ""
              } `}
              onClick={() => handleButtonClick("login")}
            >
              Login
            </h1>
            <h1
              className={`${styles.signup} ${
                activeButton === "signup" ? styles.active__button : ""
              } `}
              onClick={() => handleButtonClick("signup")}
            >
              Sign Up
            </h1>
          </div>
        </header>
        <Input
          title={"Email address"}
          placeholder={"mail@mail.com"}
          textType={"email"}
        />
        <Input
          title={"Password"}
          placeholder={"********"}
          textType={"password"}
        />
        <Button
          style={{ marginTop: "6.25rem" }}
          title={activeButton === "login" ? "Login" : "Sign Up"}
        />
      </div>
    </>
  );
};

export default authenticationForm;
