import style from "./style.module.scss";

const LiComponent = ({ label, icon, route, setRoute }) => {
  const x = () => {
    setRoute(route);
  };
  return (
    <>
      <li className={style.main}>{icon}</li>
      <li className={style.main} onClick={x}>
        {label}
      </li>
    </>
  );
};

export default LiComponent;
