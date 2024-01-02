import React from "react";
import "./Home.css";
import Slider from "../Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <div class="HomeContent">
        <div class="container">
          <div class="row banner">
            <div class="col-md-5 b-heading">
              <h2>Some Heading Goes Here</h2>
            </div>
            <div class="col-md-8 b-para">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti minima doloremque odio? Voluptate totam cum ad
                accusantium necessitatibus dolore fugiat!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="HomeContent2">
        <div class="container">
          <div class="row">
            <h3>Recent News</h3>
            <div class="col-md-3">
              <div>
                <img src={require("./office-1.jpg")} />
              </div>
              <h5>Heading</h5>
              <p>
                Date <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                excepturi libero, modi magni amet ex. <br />
                <br />
              </p>
            </div>
            <div class="col-md-3">
              <div>
                <img src={require("./office-2.jpg")} alt="" />
              </div>
              <h5>Heading</h5>
              <p>
                Date <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                excepturi libero, modi magni amet ex. <br />
                <br />
              </p>
            </div>
            <div class="col-md-3">
              <div>
                <img src={require("./office-3.jpg")} alt="" />
              </div>
              <h5>Heading</h5>
              <p>
                Date <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                excepturi libero, modi magni amet ex. <br />
                <br />
              </p>
            </div>
            <div class="col-md-3">
              <div>
                <img src={require("./office-4.jpg")} />
              </div>
              <h5>Heading</h5>
              <p>
                Date <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                excepturi libero, modi magni amet ex. <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
