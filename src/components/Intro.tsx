import "../styles/App.css";
import "../styles/Intro.css";
import { introText } from "../data";
export default function Intro() {
  return (
    <div className="intro">
      <img className="introImg" alt="IntroImage" src="images/Intro.png"></img>
      <div className="textContainer">
        <div className="text">
          {introText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
