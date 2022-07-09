import { navitems } from "../data";
export default function NavItemsContainer() {
  return (
    <div className="navItemsContiner">
      {navitems.map((item, index) => (
        <div key={index} className={item}>
          {item}
        </div>
      ))}
    </div>
  );
}
