import React from "react";
import { NavLink } from "react-router-dom";
import "./AddToCart.css";
import { useDispatch } from "react-redux";
import { decrement } from "../Actions/Action";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const dispatch = useDispatch();
  const myState = useSelector((s) => s.ChangeTheNumber);
  return (
    <div className="outer-div">
      {myState ? (
        <>
          <div className="inner-div">
            <button
              className="AddToCartBtn"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <h4>There's nothing in cart section.....</h4>
            <br />
            <h4>
              Please shop at...
              <NavLink className={"link"} to={"/products"}>
                Products
              </NavLink>
            </h4>
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCart;
