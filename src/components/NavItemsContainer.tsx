import { navitems } from "../data";
import style from "../styles/Nav.module.css";
export default function NavItemsContainer() {
  return (
    <div className={style.navItemsContiner}>
      {navitems.map((item, index) => (
        <div key={index} className={item}>
          {item}
        </div>
      ))}
    </div>
  );
}
