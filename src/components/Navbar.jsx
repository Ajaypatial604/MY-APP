import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isCheckboxChecked, setCheckboxChecked] = useState(true);
  const Nav = useNavigate();
  const handleCheckboxChange = () => {
    setCheckboxChecked(!isCheckboxChecked);
  };
  function handleLogOut() {
    let a = window.confirm("Are your sure?");
    if (a) {
      localStorage.removeItem("formData");
      Nav("/");
    }
  }
  const cart = useSelector((state) => state.ChangeTheNumber);
  return (
    <>
      <div className="container-fluid content">
        <div className="row nav-row-1">
          <div className="col-md-3 logo x">
            <img
              src={require("./Ajay.png")}
              alt="logo"
              height={30}
              width={220}
            />
            <div className="three-lines">
              <input
                type="checkbox"
                className="toggle-menu"
                onChange={handleCheckboxChange}
              />
              <div className="hamburger"></div>
            </div>
          </div>
          {!localStorage.getItem("formData") ? (
            <div
              className={`col-md-7 second x ${
                isCheckboxChecked ? "hidden" : ""
              }`}
            >
              <NavLink className={"links"} to={"/"}>
                Login
              </NavLink>
            </div>
          ) : (
            <div
              className={`col-md-7 second x ${
                isCheckboxChecked ? "hidden" : ""
              }`}
            >
              <div className="row nav-row-2">
                <div className="col-sm-1 x">
                  <NavLink className={"links"} to={"/home"}>
                    Home
                  </NavLink>
                </div>
                <div className="col-sm-1 x">
                  <NavLink className={"links"} to={"/about"}>
                    About
                  </NavLink>
                </div>
                <div className="col-sm-1 x">
                  <NavLink className={"links"} to={"/products"}>
                    Products
                  </NavLink>
                </div>

                <div className="col-sm-1 x">
                  <NavLink className={"links"} to={"/help"}>
                    Help
                  </NavLink>
                </div>
                <div className="col-sm-1 x">
                  <span className={"links"} onClick={handleLogOut}>
                    LogOut
                  </span>
                </div>

                <div className="col-sm-1 x">
                  <NavLink className={"links"} to={"/addToCart"}>
                    <span className="cart-span">{cart.length}</span>
                    <BsCart4 size={20} />
                  </NavLink>
                </div>
                <div className="col-sm-4 x">
                  <input className="search" placeholder="Search..."></input>
                  <AiOutlineSearch size={25} className="search-icon" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
