export const navitems = ["About me", "Skills", "Projects", "Experience"];

//Intro part Data
export const introText = [
  "Hello World! 안녕하세요",
  "저의 portfolio 웹사이트 방문을 환영합니다.",
  "저는 무언가 만드는것을 좋아하고 새로운 도전을 즐기고 두려워하지 않습니다.",
  "제가 만들고있는 것들. 도전하고 있는 것들. 이곳에서 마음껏 구경해주세요",
];

//About part Data
export const minseonInfo = ["박민선 / Minseon Park", "1997.12.19", "서울특별시 종로구"];
export const educationInfo = ["San Francisco State University 졸업"];
export const contactInfo = ["minseonpark00@gmail.com", "010-7695-5277"];
export const channelInfo = ["https://github.com/minseon-park", "https://www.linkedin.com/in/minseon-park-859a98172/"];

//Skills part Data
export const tags = ["#Software Developer", "#Frontend Developer"];
export const skillsText = [
  "현재 저의 기술별 숙련도를 나타내었습니다. ",
  "학부에서 Computer Science를 전공한 후,",
  "React와 Javascript 에 관심을 두고 공부하며 ",
  "개발하였습니다. 현재 강사로서 Python을 가르치며 ",
  "사용하고 있습니다. Frontend part 뿐만 아니라 ",
  "다른 분야또한 흥미를 가지고 배우며 성장중입니다. ",
];

export const skills = [
  {
    name: "React",
    percentage: 80,
  },
  {
    name: "JavaScripts",
    percentage: 70,
  },
  {
    name: "HTML",
    percentage: 80,
  },
  {
    name: "CSS",
    percentage: 80,
  },
  {
    name: "Flutter",
    percentage: 60,
  },
  {
    name: "Python",
    percentage: 60,
  },
  {
    name: "Figma",
    percentage: 60,
  },
];

//Project data
export const projects = [
  {
    title: "POSTFIT",
    introduction:
      " Covid 19 로 팬데믹 상황에서 많은 사람들이 집에서 운동을 할 수 있도록 만든 AI 기반 운동 웹사이트 입니다. 집에서 유저들이 운동 동영상을 보면서 따라할 때, AI 가 유저의 운동 모션을 카메라를 통해 인식하여 올바른 자세를 잡고 운동할 수 있도록 도와줍니다. 대학교 4학년때 같은 반 학생들과 팀을 꾸려 프로젝트를 시작했습니다. 프로젝트에서 저는 프론트엔드를 담당하였습니다. 컴퓨터 공학과 학생들로만 팀이 구성되어 있어, 기획자와 디자이너가 없기에 제가 직접 웹사이트 기획부터 참여하여 피그마로 전체적인 UI를 디자인 하였습니다. 프론트엔드 개발은 React를 사용하였습니다. AI 팀, Backend 팀, Frontend 팀으로 나누어서 프로젝트를 진행한것이 처음으로 협업을 한 프로젝트이기에 의미가있습니다. 프론트엔드 팀이 3명이었는데, 처음에는 다른사람의 코드를 보는게 쉽지 않았으며, 같이 작업을 해나아가는 것이 익숙하지 않았습니다. 매주 같이 코드 리뷰 를 하며 프론트엔드 파를 완성하였습니다. 처음으로 한 팀 프로젝트를 성공적으로 마무리하여 저에게 협업에 대한 좋은 경험과 자신감을 준 프로젝트 입니다. ",
    devdate: "2021.08 - 2021.11",
    servciedata: "2021.11 - 2021.12",
    mainfunction: "운동영상 업로드, 업로드 된 동영상을 시청, 카메라를 키고 운동할때 AI 기반 자세 교정 기능",
    github: "https://github.com/minseon-park/Postfit ",
    Figma: "https://www.figma.com/file/HAuRInEta2BxB3q0aTfJ4G/PostFit?node-id=0%3A1",
  },
  {
    title: "도혜종합건설 홈페이지",
    introduction:
      " (주) 도혜 종합 건설의 외주를 받고 제작한 웹사이트 입니다. 건설회사의 이력과 작업들을 거래처에 홍보할 수 있는 웹사이트가 제작이 프로젝트의 목적이었습니다. 외주를 진행할때에 다른 한명의 개발자와 함께 2명에서 작업하였습니다. 저는 리엑트 부분을 담당하게 되었고, 다른 한분의 개발자는 리엑트 협업과 서버연결을 담당하였습니다. 리엑트를 처음으로 사용한 프로젝트이었습니다. 처음으로 리엑트를 사용하기에, 모듈화와 디자인패턴에서 아쉬운 부분이 있습니다. 하지만 자바스크립트만 사용하다가 리엑트로 옮겨온 첫 프로젝트이기에 리엑트와 관련하여 많이 배우고 성장할 수 있는 프로젝트였습니다. 서버는 아마존 aws를 사용하였으며, 도혜종합건설의 메인 웹사이트로서 1년간 서비스 되었습니다. ",
    devdate: "2020.12 - 2021.02",
    servciedata: "2021.02 - 2022.02",
    mainfunction: "회사 소개, 회사 이력과 프로젝트 소개",
    github: "https://github.com/minseon-park/dohye-constrution ",
    Figma: "",
  },
  {
    title: "Minseon’s Portfolio",
    introduction:
      "개발자 포트폴리오 웹사이트 입니다. 개발자로서 저를 소개하기 위해 만들었습니다. 피그마를 사용하여 직접 디자인 하였으며, 리엑트를 사용하여 만들었습니다. 이전 프로젝트보다 효과적인 모듈화를 통해 개발하였습니다. ",
    devdate: "2021.07",
    servciedata: "2021.08 - 현재",
    mainfunction: "자기소개, 기술, GitHub 링크, 프로젝트 경험, 경력 공유",
    github: " https://github.com/minseon-park/portfolio  ",
    Figma: "https://www.figma.com/file/6MxA2ovwKtCRGzigCKMotb/portfolio?node-id=0%3A1",
  },
];
