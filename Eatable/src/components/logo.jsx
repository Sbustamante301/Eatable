import eatable from "../assets/eatable.svg";
import foodforeveryone from "../assets/food4.svg";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        margin: "10rem",
      }}
    >
      <img
        style={{ width: "11.2805rem", height: "3.125rem", flexShrink: "1" }}
        src={eatable}
        alt="imagen eatable"
      />
      <h2
        style={{
          color: "#FA4A0C",
          textAlign: "center",
          fontFamily: "SF Pro Rounded",
          fontSize: ".9375rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "86.836%" /* .5427rem */,
          letterSpacing: ".0313rem",
        }}
      >
        Food for Everyone
      </h2>
    </div>
  );
};

export default Logo;
