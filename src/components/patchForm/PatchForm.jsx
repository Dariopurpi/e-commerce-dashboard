import style from "./style.module.scss";
import { PATCH } from "../../utils/http";

const PatchForm = ({ value, setTextPatch, textPatch, id }) => {
  const onHandleInput = (e) => {
    setTextPatch(e.target.value);
  };

  const onHandleSumbit = (e) => {
    e.preventDefault();
    PATCH(id, textPatch);
  };

  return (
    <form onClick={onHandleSumbit}>
      <input
        className={style.main}
        type="text"
        placeholder={value}
        onChange={onHandleInput}
      ></input>
      <button type="submit">Apply</button>
    </form>
  );
};

export default PatchForm;
