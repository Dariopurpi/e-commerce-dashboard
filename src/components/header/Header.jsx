import style from "./style.module.scss";

const Header = () => {
  return (
    <div className={style.main}>
      <h1>
        per senettone: guarda put e delete da network. questa api funziona cosi
      </h1>
      <p>Contatti: 3569898589</p>
      <div className="navbar"></div>
    </div>
  );
};

export default Header;
