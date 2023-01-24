import GET from "../../utils/http";
import Navbar from "../navbar/Navbar";

import style from "./style.module.scss";

const Header = () => {
  return (
    <div className={style.main}>
      <p>Contatti: 3569898589</p>
      <div className="navbar"></div>
    </div>
  );
};

export default Header;
