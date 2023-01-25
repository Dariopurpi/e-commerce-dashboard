import { useEffect, useState } from "react";
import { GET, POST } from "../../utils/http";
import LiComponent from "../licomponent/LiComponents";
import AddForm from "../addForm/AddForm";
import Card from "../card/Card";

import style from "./style.module.scss";

const Products = () => {
  const productStateInit = {
    products: [],
    loading: true,
  };

  const [productState, setProductState] = useState(productStateInit);

  const getData = () => {
    setProductState({ ...productState, loading: true });
    GET("products").then((data) =>
      setProductState({
        loading: false,
        products: data,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AddForm />
      <div className={style.main}>
        {productState.products.map((item) => (
          <Card
            id={item.id}
            title={item.title}
            img={item.thumbnail}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};
export default Products;
