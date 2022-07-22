import { useState } from "react";
import "../styles/App.css";
import style from "../styles/Nav.module.css";
import NavItemsContainer from "./NavItemsContainer";
import nowWidth from "../hooks/useResize";

export default function Nav({ navRef, controllers }: any) {
  const width = nowWidth();

  return (
    <div ref={navRef} className={style.nav}>
      <div className={style.logo}>Minseon's Portfolio</div>
      {width < 650 ? <button>🍄</button> : <NavItemsContainer controllers={controllers} />}
    </div>
  );
}
