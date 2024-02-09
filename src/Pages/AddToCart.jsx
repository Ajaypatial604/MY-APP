import React from "react";
import { NavLink } from "react-router-dom";
import "./AddToCart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Actions/Action";

const AddToCart = () => {
  const cart = useSelector((state) => state.ChangeTheNumber);
  const dispatch = useDispatch();
  // console.log("AddToCart", cart);
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="outer-div">
      {cart.length === 0 ? (
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
          <table className="table" style={{ verticalAlign: "middle" }}>
            <thead className="thead-light">
              <tr>
                <th scope="col">S.n.</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Remove Item</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((i, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}.</th>
                    <td>
                      <img
                        src={i.cart.image}
                        className="img-fluid "
                        style={{ maxHeight: "10rem" }}
                      />
                    </td>
                    <td>Rs. {i.cart.price}/-</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleRemoveFromCart(i.cart.id)}
                      >
                        -
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <th scope="col" colSpan={2}>
                  Total Price:-
                </th>
                <th scope="col">
                  {cart.reduce(
                    (total, item) => total + parseInt(item.cart.price),
                    0
                  )}
                  /-
                </th>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default AddToCart;
