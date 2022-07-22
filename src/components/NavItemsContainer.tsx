import { navitems } from "../data";
import style from "../styles/Nav.module.css";
export default function NavItemsContainer({ controllers }: any) {
  return (
    <div className={style.navItemsContiner}>
      {navitems.map((item, index) => {
        return (
          <div onClick={controllers[index]} key={index} className={item}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
