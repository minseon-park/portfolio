import style from "../styles/Projects.module.css";
export default function Projects() {
  return (
    <div className={style.project}>
      <div className={style.projectTitle}>
        <p>Projects </p>
        <p id={style.projectTitleColor}> .</p>
      </div>
      <div className={style.projectContainer}></div>
    </div>
  );
}
