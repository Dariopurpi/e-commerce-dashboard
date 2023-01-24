import Categories from "../categories/Categories";
import Home from "../home/Home";
import User from "../user/User";
import Order from "../order/Order";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Products from "../Products/Products";

const Container = () => {
  const [route, setRoute] = useState("home");

  return (
    <div>
      <div>
        <Navbar setRoute={setRoute} />
      </div>
      <div>
        {route === "home" && <Home />}
        {route === "categories" && <Categories />}
        {route === "products" && <Products />}

        {route === "orders" && <Order />}
        {route === "users" && <User />}
      </div>
    </div>
  );
};

export default Container;
