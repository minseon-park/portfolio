import "../styles/App.css";
import style from "../styles/Nav.module.css";
import NavItemsContainer from "./NavItemsContainer";
export default function Nav() {
  return (
    <div className={style.nav}>
      <div className={style.logo}>Minseon's Portfolio</div>
      <NavItemsContainer />
    </div>
  );
}
