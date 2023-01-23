import style from "./style.module.scss";

const LiComponent = ({ label, icon }) => {
  return (
    <li className={style.main}>
      <div>{icon}</div>
      <div>{label}</div>
    </li>
  );
};

export default LiComponent;
