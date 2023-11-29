import React, { useState } from "react";
import "./products.css";

const Products = () => {
  let [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1 style={{ marginBottom: "30px" }}>Products</h1>
      <div className="container-fluid">
        <div className="row row-1">
          <div className="col box">
            <img
              src="https://pbx2-pbww-prod-pbww-cdn.getprintbox.com/media/productimage/e925de22-44e0-4276-bb92-0b4101f5f834/Blank%20Jacket_thumb_900x900?mt=1583407059.733"
              height={250}
              width={250}
            ></img>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "start" }}>
                {" "}
                Name:XYZ <br></br> Price:1500/- <br /> Brand:XXXYY
              </div>
              <button className="addToCart" onClick={add}>
                add to cart
              </button>
            </div>
          </div>
          <div className="col box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPLX0wLUjgLS3jNWomEUpUx1UckapaBtIbw&usqp=CAU"
              height={250}
              width={250}
            ></img>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "start" }}>
                {" "}
                Name:XYZ <br></br> Price:1500/- <br /> Brand:XXXYY
              </div>
              <button className="addToCart">add to cart</button>
            </div>
          </div>
          <div className="col box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNm3o6-2Pd525MRgPjUR1WmXlI7Ch3CQVwg&usqp=CAU"
              height={250}
              width={250}
            ></img>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "start" }}>
                {" "}
                Name:XYZ <br></br> Price:1500/- <br /> Brand:XXXYY
              </div>
              <button className="addToCart">add to cart</button>
            </div>
          </div>
          <div className="col box">
            <img
              src="https://handsomedans.co.uk/cdn/shop/products/hd-anarchy-jacket-755268_grande.png?v=1692727403"
              height={250}
              width={250}
            ></img>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "start" }}>
                {" "}
                Name:XYZ <br></br> Price:1500/- <br /> Brand:XXXYY
              </div>
              <button className="addToCart">add to cart</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4KgwNr487ANXdsppkhZu7OOikvadWng9ag&usqp=CAU"
              height={250}
              width={250}
            ></img>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "start" }}>
                {" "}
                Name:XYZ <br></br> Price:1500/- <br /> Brand:XXXYY
              </div>
              <button className="addToCart">add to cart</button>
            </div>
          </div>
          <div className="col box">
            <img
              src="https://img3.exportersindia.com/product_images/bc-full/2019/6/4798499/men-jackets-1560933545-4960136.jpeg"
              height={250}
              width={250}
            ></img>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "start" }}>
                {" "}
                Name:XYZ <br></br> Price:1500/- <br /> Brand:XXXYY
              </div>
              <button className="addToCart">add to cart</button>
            </div>
          </div>
          <div className="col box">
            <img
              src="https://5.imimg.com/data5/PR/YU/MY-22718484/boys-denim-jackets.jpg"
              height={250}
              width={250}
            ></img>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "start" }}>
                {" "}
                Name:XYZ <br></br> Price:1500/- <br /> Brand:XXXYY
              </div>
              <button className="addToCart">add to cart</button>
            </div>
          </div>
          <div className="col box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVZijZZbyqPNvuaAqjY7bL5ho1ls2gVMfNMyZEwIWEtUgg0feCCnSU8uNOpBg1bJ15hU&usqp=CAU"
              height={250}
              width={250}
            ></img>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "start" }}>
                {" "}
                Name:XYZ <br></br> Price:1500/- <br /> Brand:XXXYY
              </div>
              <button className="addToCart">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
