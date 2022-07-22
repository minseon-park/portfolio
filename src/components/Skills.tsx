import style from "../styles/Skills.module.css";
import { skillsText, tags, skills } from "../data";
import Text from "./Text";
import Bars from "./Bars";
export default function Skills({ skillRef }: any) {
  return (
    <div ref={skillRef} className={style.skills}>
      <div className={style.skillsTitle}>
        <p>Skills</p>
        <p id={style.skillsColor}>.</p>
      </div>
      <div className={style.skillsContainer}>
        <div className={style.textContainer}>
          <Text textData={tags} classname={style.skillsTag} />
          <Text textData={skillsText} classname={style.skillsText} />
        </div>
        <div className={style.barContainer}>
          {skills.map((item, index) => (
            <Bars barTitle={item.name} percentage={item.percentage} />
          ))}
        </div>
      </div>
    </div>
  );
}
