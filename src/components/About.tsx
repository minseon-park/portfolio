import "../styles/App.css";
import style from "../styles/About.module.css";
import { minseonInfo, educationInfo, channelInfo, contactInfo } from "../data";
import TextBox from "./TextBox";
export default function About({ aboutRef }: any) {
  return (
    <div ref={aboutRef} className={style.about}>
      <div className={style.aboutTitle}>
        <p>About Me </p>
        <p id={style.aboutColor}> .</p>
      </div>
      <div className={style.aboutContainer}>
        <img className={style.aboutImg} alt="profilePic" src="images/Profile.png"></img>
        <div className={style.infoContainer}>
          <div className={style.firstRow}>
            <TextBox titleText="I'm Minseon" textData={minseonInfo} classname={style.aboutInfo} />
            <TextBox titleText="Education" textData={educationInfo} classname={style.aboutInfo} />
          </div>
          <div className={style.secondRow}>
            <TextBox titleText="Contact" textData={contactInfo} classname={style.aboutInfo} />
            <TextBox titleText="Channel" textData={channelInfo} classname={style.aboutInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}
