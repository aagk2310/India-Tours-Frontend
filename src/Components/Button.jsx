import style from "./Button.module.css";
function Button({ onClick, type = "sm", children = null }) {
  return (
    <div className={style.container}>
      <button
        className={type === "sm" ? style.btnSmall : style.btnLarge}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
