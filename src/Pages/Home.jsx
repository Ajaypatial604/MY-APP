import React from "react";
import Slider from "../Slider";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Slider />
      <h1>Most Shopped</h1>
      <Products />
    </div>
  );
};

export default Home;
