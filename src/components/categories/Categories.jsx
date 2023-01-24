import { useEffect } from "react";
import GET from "../../utils/http";

const Categories = () => {
  useEffect(() => {
    GET("categories");
  }, []);
  return <div>categories</div>;
};
export default Categories;
