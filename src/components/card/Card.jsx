import style from "./style.module.scss";
import { DELETE, PATCH } from "../../utils/http";
import { useState } from "react";
import PatchForm from "../patchForm/PatchForm";

const Card = ({ title, img, description, id }) => {
  const [patchForm, setPatchForm] = useState(false);
  const [textPatch, setTextPatch] = useState("");

  const patchAction = () => {
    setPatchForm(!patchForm);
    console.log(patchForm);
  };

  return (
    <div className={style.main}>
      <h3>{title}</h3>
      <img src={img} alt="" />
      <p>{description}</p>
      <p>{id}</p>
      <button id={id} onClick={() => DELETE(id)}>
        DELETE
      </button>
      <button onClick={() => patchAction()}>Modifica</button>
      {patchForm ? (
        <PatchForm
          id={id}
          textPatch={textPatch}
          setTextPatch={setTextPatch}
          value={title}
        />
      ) : null}
    </div>
  );
};

export default Card;
