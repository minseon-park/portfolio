import style from "../styles/ProjectItem.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../data";
export default function ProjectItem() {
  return (
    <div className={style.projectitem}>
      <div className={style.title}>POSTFIT</div>

      <div className={style.container}>
        <div className={style.firstcolumn}>
          <img className={style.proejctimg} alt="projectimg" src="images/postfit1.png"></img>
          <div className={style.date}>
            <p>개발기간: 2021.08 - 2021.11</p>
            <p>서비스 기간: 2021.11 - 2021.12</p>
          </div>
        </div>

        <div className={style.secondcolumn}>
          <div className={style.description}>
            Covid 19 로 팬데믹 상황에서 많은 사람들이 집에서 운동을 할 수 있도록 만든 AI 기반 운동 웹사이트 입니다. 집에서 유저들이 운동
            동영상을 보면서 따라할 때, AI 가 유저의 운동 모션을 카메라를 통해 인식하여 올바른 자세를 잡고 운동할 수 있도록 도와줍니다.
            대학교 4학년때 같은 반 학생들과 팀을 꾸려 프로젝트를 시작했습니다. 프로젝트에서 저는 프론트엔드를 담당하였습니다. 컴퓨터 공학과
            학생들로만 팀이 구성되어 있어, 기획자와 디자이너가 없기에 제가 직접 웹사이트 기획부터 참여하여 피그마로 전체적인 UI를 디자인
            하였습니다. 프론트엔드 개발은 React를 사용하였습니다. AI 팀, Backend 팀, Frontend 팀으로 나누어서 프로젝트를 진행한것이 처음으로
            협업을 한 프로젝트이기에 의미가있습니다. 프론트엔드 팀이 3명이었는데, 처음에는 다른사람의 코드를 보는게 쉽지 않았으며, 같이
            작업을 해나아가는 것이 익숙하지 않았습니다. 매주 같이 코드 리뷰 를 하며 프론트엔드 파를 완성하였습니다. 처음으로 한 팀
            프로젝트를 성공적으로 마무리하여 저에게 협업에 대한 좋은 경험과 자신감을 준 프로젝트 입니다.
          </div>
          <div className={style.function}>
            주요기능: 운동영상 업로드, 업로드 된 동영상을 시청,카메라를 키고 운동할때 AI 기반 자세 교정 기능{" "}
          </div>
          <div className={style.github}>Github: https://github.com/minseon-park/Postfit </div>
          <div className={style.figma}>Figma: https://www.figma.com/file/HAuRInEta2BxB3q0aTfJ4G/PostFit?node-id=0%3A1</div>
        </div>
      </div>
    </div>
  );
}
