import React from "react";
import "./AddToCart.css";
import { useDispatch } from "react-redux";
import { decrement } from "../Actions/Action";
const AddToCart = () => {
  const dispatch = useDispatch();
  return (
    <div className="outer-div">
      <div className="inner-div">
        <button className="AddToCartBtn" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
