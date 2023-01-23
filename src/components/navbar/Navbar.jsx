import navbarLinks from "./navbarLinks";
import LiComponent from "../licomponent/LiComponents";
import style from "./style.module.scss";

const Navbar = () => {
  return (
    <ul className={style.main}>
      {navbarLinks.map((item) => (
        <LiComponent icon={item.icon} key={item.id} label={item.label} />
      ))}
    </ul>
  );
};

export default Navbar;
