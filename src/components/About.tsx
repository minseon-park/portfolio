import "../styles/App.css";
import "../styles/About.css";
import { aboutTitle, minseonInfo, educationInfo, channelInfo, contactInfo } from "../data";
import Text from "./Text";
import TextBox from "./TextBox";
export default function About() {
  return (
    <div className="about">
      {/* TODO: 타이틀 . 색깔 바꾸기 */}
      <Text textData={aboutTitle} classname="aboutTitle" />
      <div className="aboutContainer">
        <img className="aboutImg" alt="profilePic" src="images/Profile.png"></img>
        <div className="infoContainer">
          <div className="firstRow">
            <TextBox titleText="I'm Minseon" textData={minseonInfo} classname="minseonInfo" />
            <TextBox titleText="Education" textData={educationInfo} classname="minseonInfo" />
          </div>
          <div className="secondRow">
            <TextBox titleText="Contact" textData={contactInfo} classname="minseonInfo" />
            <TextBox titleText="Channel" textData={channelInfo} classname="minseonInfo" />
          </div>
        </div>
      </div>
    </div>
  );
}
