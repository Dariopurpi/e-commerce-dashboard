import { useEffect, useState } from "react";
import { GET, POST } from "../../utils/http";
import LiComponent from "../licomponent/LiComponents";
import AddForm from "../addForm/AddForm";

import style from "./style.module.scss";

const Categories = () => {
  const categoriesStateInit = {
    categories: [],
    loading: true,
  };

  const [categoriesState, setCategoriesState] = useState(categoriesStateInit);

  const getData = () => {
    setCategoriesState({ ...categoriesState, loading: true });
    GET("products").then((data) =>
      setCategoriesState({
        loading: false,
        categories: data,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className={style.main}>
      {categoriesState.categories.map((item) => (
        <LiComponent label={item.category}></LiComponent>
      ))}
    </ul>
  );
};
export default Categories;
