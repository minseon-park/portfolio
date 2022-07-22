import React, { useRef } from "react";
import Home from "./styles/Home.module.css";

import "./styles/App.global.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import useMoveScrool from "./hooks/useMoveScrool";
function App() {
  const [navRef, onMoveToNav] = useMoveScrool();
  const [aboutRef, onMoveToAbout] = useMoveScrool();
  const [skillRef, onMoveToSkill] = useMoveScrool();
  const [projectRef, onMoveToProject] = useMoveScrool();

  return (
    <div className="Home">
      <Nav navRef={navRef} controllers={[onMoveToNav, onMoveToAbout, onMoveToSkill, onMoveToProject]} />
      <Intro />
      <About aboutRef={aboutRef} />
      <Skills skillRef={skillRef} />
      <Projects projectRef={projectRef} />
    </div>
  );
}
export default App;
