import "../styles/App.css";
import "../styles/Intro.css";
import { introText } from "../data";
import Text from "./Text";
export default function Intro() {
  return (
    <div className="intro">
      <img className="introImg" alt="IntroImage" src="images/Intro.png"></img>
      <div className="textContainer">
        <Text textData={introText} classname="text" />
      </div>
    </div>
  );
}
