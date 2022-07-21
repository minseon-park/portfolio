import style from "../styles/ProjectItem.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import json from "../data.json";
import SimpleImageSlider from "react-simple-image-slider";

interface Item {
  title: string;
  introduction: string;
  devdate: string;
  servciedata: string;
  mainfunction: string;
  github: string;
  figma?: string;
  image: string[];
}

export default function ProjectItem() {
  return (
    <>
      {json.projectItem.map((item: Item, i: number) => {
        return (
          <div key={i} className={style.projectitem}>
            <div className={style.title}>{item.title}</div>

            <div className={style.container}>
              <div className={style.firstcolumn}>
                {/* <img className={style.proejctimg} alt="projectimg" src="images/postfit1.png"></img> */}
                <SimpleImageSlider width={500} height={350} images={item.image} showBullets={true} showNavs={true} />
                <div className={style.date}>
                  <p>{`개발기간: ${item.devdate}`}</p>
                  <p>{`서비스 기간: ${item.servciedata}`}</p>
                </div>
              </div>

              <div className={style.secondcolumn}>
                <div className={style.description}>{item.introduction}</div>
                <div className={style.function}>{`주요기능: ${item.mainfunction}`}</div>
                <div className={style.github}>{`Github: ${item.github} `}</div>
                <div className={style.figma}>{`Figma: ${item.figma}`}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
