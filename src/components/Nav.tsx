import "../styles/App.css";
import "../styles/Nav.css";
import NavItemsContainer from "./NavItemsContainer";
export default function Nav() {
  return (
    <div className="nav">
      <div className="logo">Minseon's Portfolio</div>
      <NavItemsContainer />
    </div>
  );
}
