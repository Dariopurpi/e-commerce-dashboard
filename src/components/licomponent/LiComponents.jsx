import style from "./style.module.scss";

const LiComponent = ({ label, icon, route, setRoute }) => {
  const x = () => {
    setRoute(route);
  };
  return (
    <li className={style.main}>
      <div>{icon}</div>
      <div onClick={x}>{label}</div>
    </li>
  );
};

export default LiComponent;
