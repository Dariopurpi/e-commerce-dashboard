import style from "./style.module.scss";
import { DELETE } from "../../utils/http";

const Card = ({ title, img, description, id }) => {
  return (
    <div className={style.main}>
      <h3>{title}</h3>
      <img src={img} alt="" />
      <p>{description}</p>
      <p>{id}</p>
      <button id={id} onClick={() => DELETE(id)}>
        DELETE
      </button>
    </div>
  );
};

export default Card;
