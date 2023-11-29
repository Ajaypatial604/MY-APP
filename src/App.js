import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Help from "./Pages/Help";
import Navbar from "./components/Navbar";
import Page404 from "./Pages/Page404";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Form2 from "./Pages/Form2";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/help" element={<Help />} />{" "}
          <Route path="/SignUp" element={<Form2 />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
