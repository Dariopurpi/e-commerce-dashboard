import Navbar from "../navbar/Navbar";

import style from "./style.module.scss";

const Header = () => {
  return (
    <div className={style.main}>
      <p>Contatti: 3569898589</p>
      <div className="navbar">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
