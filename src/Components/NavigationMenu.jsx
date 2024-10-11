import { Divider, List, ListItem, ListItemText } from "@mui/material";
import style from "./NavigationMenu.module.css";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
function ListItemElement({ text, children }) {
  return (
    <>
      <Divider />
      <ListItem>
        {children}
        <ListItemText primary={text} className={style.listItem}></ListItemText>
      </ListItem>
    </>
  );
}
function NavigationMenu({ state, setState }) {
  return (
    <>
      <div
        className={style.overlay}
        onClick={() => {
          setState((s) => !s);
        }}
      ></div>
      <div className={style.modalCard}>
        <List>
          <Link to={"/login"}>
            <ListItemElement text={"Log In"}>
              <LoginSharpIcon />
            </ListItemElement>
          </Link>
          <Link to={"/signup"}>
            <ListItemElement text={"Sign UP"}>
              <LoginSharpIcon />
            </ListItemElement>
          </Link>
        </List>
      </div>
    </>
  );
}

export default NavigationMenu;
