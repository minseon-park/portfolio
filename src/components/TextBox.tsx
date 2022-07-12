import style from "../styles/TextBox.module.css";
interface TextBoxProps {
  titleText: string;
  textData: String[];
  classname: string;
}
export default function TextBox({ titleText, textData, classname }: TextBoxProps) {
  return (
    <div className={classname}>
      <div className={style.titleText}> {titleText}</div>
      <div className={style.textData}>
        {textData.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
}
