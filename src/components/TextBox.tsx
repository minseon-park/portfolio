import "../styles/TextBox.css";
export default function TextBox({ titleText, textData, classname }: { titleText: string; textData: String[]; classname: string }) {
  return (
    <div className={classname}>
      <div className="titleText"> {titleText}</div>
      <div className="textData">
        {textData.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
}
