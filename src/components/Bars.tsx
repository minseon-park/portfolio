import style from "../styles/Bars.module.css";

interface BarProps {
  barTitle: string;
  percentage: number;
}
export default function Bars({ barTitle, percentage }: BarProps) {
  return (
    <div className={style.bar}>
      <div className={style.pro} style={{ width: `${percentage}%` }}>
        <div>{barTitle}</div>
        <div>{percentage}%</div>
      </div>
    </div>
  );
}
