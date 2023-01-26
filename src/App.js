import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Categories from "./components/categories/Categories";
import Container from "./components/container/Container";
import { useState } from "react";
import Home from "./components/home/Home";

import "./App.css";

function App() {
  const [route, setRoute] = useState("home");
  return (
    <div className="App">
      <Header />
      <Container route={route} setRoute={setRoute} />
    </div>
  );
}

export default App;
