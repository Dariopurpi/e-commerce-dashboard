import navbarLinks from "./navbarLinks";
import LiComponent from "../licomponent/LiComponents";
import style from "./style.module.scss";

const Navbar = ({ setRoute }) => {
  return (
    <ul className={style.main}>
      {navbarLinks.map((item) => (
        <LiComponent
          setRoute={setRoute}
          icon={item.icon}
          key={item.id}
          label={item.label}
          route={item.route}
        />
      ))}
    </ul>
  );
};

export default Navbar;
