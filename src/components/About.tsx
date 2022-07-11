import "../styles/App.css";
import "../styles/About.css";
import { minseonInfo, educationInfo, channelInfo, contactInfo } from "../data";
import TextBox from "./TextBox";
export default function About() {
  return (
    <div className="about">
      <div className="aboutTitle">
        <p>About Me </p>
        <p id="aboutColor"> .</p>
      </div>
      <div className="aboutContainer">
        <img className="aboutImg" alt="profilePic" src="images/Profile.png"></img>
        <div className="infoContainer">
          <div className="firstRow">
            <TextBox titleText="I'm Minseon" textData={minseonInfo} classname="aboutInfo" />
            <TextBox titleText="Education" textData={educationInfo} classname="aboutInfo" />
          </div>
          <div className="secondRow">
            <TextBox titleText="Contact" textData={contactInfo} classname="aboutInfo" />
            <TextBox titleText="Channel" textData={channelInfo} classname="aboutInfo" />
          </div>
        </div>
      </div>
    </div>
  );
}
