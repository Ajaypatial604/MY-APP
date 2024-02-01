import React, { useEffect, useState } from "react";
import "./products.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Actions/Action";
import { RxCross2 } from "react-icons/rx";

const Products = () => {
  let [API, setAPI] = useState([]);
  let [detail, setDetail] = useState(false);
  let [detail2, setDetail2] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setAPI(data);
      });
  }, []);
  console.log(API[0]);

  const dispatch = useDispatch();
  function productDetail(prod) {
    setDetail2([{ ...prod }]);
    setDetail(true);
  }
  function commonFunction() {
    const object1 = { name: "RealmeC2", Brand: "Realme", Price: 7000 };
    dispatch(addToCart(object1));
  }

  return (
    <>
      {detail
        ? detail2.map((prod) => {
            return (
              <div className="container-fluid view-data">
                <div className="row">
                  <div className="col-12">
                    <button
                      className="btn btn-light btn-sm view-data-button"
                      type="button"
                      onClick={() => {
                        setDetail(false);
                      }}
                    >
                      <RxCross2 />
                    </button>
                  </div>
                </div>
                <div className="row xyz">
                  <div className="col-sm-5 view-data-image">
                    <img src={prod.image}></img>
                  </div>
                  <div className="col-sm-7 xyz2">
                    <div>
                      <h3> DESCRIPTION:</h3>
                      <p>{prod.description}</p>
                    </div>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={commonFunction}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : null}
      <div className="container-fluid main-content">
        {API.map((i) => (
          <div className="card">
            <img className="card-img-top" src={i.image} alt={"Card cap"} />
            <div className="card-body">
              <h6 className="card-title"> Name: {i.name}</h6>
              <h6 className="card-title"> Price: {i.price}/-</h6>
            </div>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => {
                productDetail(i);
              }}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
