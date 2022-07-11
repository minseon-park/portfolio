export default function Text({ textData, classname }: { textData: String[]; classname: string }) {
  return (
    <div className={classname}>
      {textData.map((text, index) => (
        <p key={index}> {text}</p>
      ))}
    </div>
  );
}
