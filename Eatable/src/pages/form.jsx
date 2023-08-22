import Input from "../components/input";
import Button from "../components/button";
import Logo from "../components/logo";
const authenticationForm = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          alignItems: "center",
        }}
      >
        <header
          style={{
            width: "32.125rem",
            height: "27rem",
            borderRadius: "1.875rem",
            backgroundColor: "#FFFFFF",
            marginBottom: "2rem",
          }}
        >
          <Logo />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8.1875rem",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10rem",
              fontWeight: "600",
              fontfamily: "Source Sans Pro",
            }}
          >
            <h1
              style={{
                color: "#000",
                /* SemiBold/M */

                fontSize: "1.125rem",
                fontWeight: "37.5rem",
                cursor: "pointer",
              }}
            >
              Login
            </h1>
            <h1
              style={{
                color: "#000",
                /* SemiBold/M */
                fontSize: "1.125rem",
                cursor: "pointer",
              }}
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
        <Button style={{ marginTop: "6.25rem" }} title={"Login"} />
      </div>
    </>
  );
};

export default authenticationForm;
