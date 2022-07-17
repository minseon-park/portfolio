import style from "../styles/Projects.module.css";
import ProjectItem from "./ProjectItem";
export default function Projects() {
  return (
    <div className={style.project}>
      <div className={style.projectTitle}>
        <p>Projects </p>
        <p id={style.projectTitleColor}> .</p>
      </div>
      <div className={style.projectContainer}>
        <ProjectItem />
      </div>
    </div>
  );
}
