import style from "./style.module.scss";
import { useState, useEffect } from "react";
import { POST } from "../../utils/http";

const AddForm = () => {
  const [textAdd, setTextAdd] = useState({
    name: "",
    id: "",
  });

  const onHandleForm = (input, e) => {
    setTextAdd({
      ...textAdd,
      [input]: e.target.value,
    });
  };

  const onHandleSumbit = (e) => {
    POST(textAdd.name, textAdd.id);
  };

  return (
    <>
      <form>
        <input
          onChange={(e) => onHandleForm("name", e)}
          value={textAdd.name}
          type="text"
          placeholder="inserisci nome categoria"
        />
        <input
          onChange={(e) => onHandleForm("id", e)}
          value={textAdd.id}
          type="text"
          placeholder="inserisci id"
        />
      </form>
      <button type="submit" onClick={(e) => onHandleSumbit(e)}>
        Add
      </button>
    </>
  );
};

export default AddForm;
