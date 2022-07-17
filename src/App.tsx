import React from "react";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
export default App;
