import React from "react";
import "./Footer.css";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col foot-col">
          <h3>Company</h3>
          <p>Our Services</p>
          <p>Privacy Policy</p>
          <p>Affiliate Program</p>
        </div>
        <div className="col foot-col">
          <h3>Get Help</h3>
          <p>FAQ</p>
          <p>Shipping</p>
          <p>Returns</p>
          <p>Order Status</p>
          <p>Payment Options</p>
        </div>
        <div className="col foot-col">
          <h3>Online Shop</h3>
          <p>Watch</p>
          <p>Blog</p>
          <p>Shoes</p>
          <p>Dress</p>
        </div>
        <div className="col-sm-3 foot-col">
          <h3 style={{ marginBottom: "30px" }}>Follow Us</h3>
          <span>
            <MdOutlineFacebook className="social-icon" />{" "}
            <AiFillTwitterCircle className="social-icon" />{" "}
            <RiWhatsappFill className="social-icon" />
            <AiFillInstagram className="social-icon" />
          </span>
        </div>
      </div>
      <div
        className="row"
        style={{ borderTop: "1px solid white", marginTop: "10px" }}
      >
        <div className="col">
          <p style={{ paddingTop: "10px" }}>
            © 2023 AjayKumar.com, Times Internet Limited. All rights reserved |
            The Unknown Reports | Times Reports Move to top
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
