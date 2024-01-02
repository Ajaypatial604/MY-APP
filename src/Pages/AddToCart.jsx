import React from "react";
import { NavLink } from "react-router-dom";
import "./AddToCart.css";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const cart = useSelector((state) => state.ChangeTheNumber);
  console.log("AddToCart", cart);
  return (
    <div className="outer-div">
      {cart.length == 0 ? (
        <>
          <h4>There's nothing in cart section.....</h4>
          <br />
          <h4>
            Please shop at...
            <NavLink className={"link"} to={"/products"}>
              Products
            </NavLink>
          </h4>
        </>
      ) : (
        <>
          {" "}
          <h2>Cart</h2>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.name} - {product.Brand} - ${product.Price}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AddToCart;
