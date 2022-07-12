import "../styles/App.css";
import style from "../styles/Intro.module.css";
import { introText } from "../data";
import Text from "./Text";
export default function Intro() {
  return (
    <div className={style.intro}>
      <img className={style.introImg} alt="IntroImage" src="images/Intro.png"></img>
      <div className={style.textContainer}>
        <Text textData={introText} classname={style.text} />
      </div>
    </div>
  );
}
