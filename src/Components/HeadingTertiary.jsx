import style from "./HeadingTertiary.module.css";

function HeadingTertiary({ text, width, height, fontSize, fontWeight }) {
  const divContainer = {
    width: width,
    height: height,
    textAlign: "center",
    lineHeight: 1,
    backgroundImage:
      "linear-gradient(to bottom right, rgba(134, 93, 255, 1), rgba(151, 222, 255, 1))",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: fontWeight,
    fontSize: fontSize,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return <div style={divContainer}>{text}</div>;
}

export default HeadingTertiary;
