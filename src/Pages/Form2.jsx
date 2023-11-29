import React, { useState, useEffect } from "react";
import "./form2.css";
import { NavLink } from "react-router-dom";
// let storedData = JSON.parse(localStorage.getItem("formData") || []);
let person = {
  name: "",
  pass: "",
  email: "",
  age: "",
};
const Form2 = () => {
  let [data, setData] = useState(person);
  let [array, setArray] = useState([]);

  let [userErr, setUserErr] = useState();
  let [passErr, setPassErr] = useState();
  let [emailErr, setEmailErr] = useState();
  let [ageErr, setAgeErr] = useState();

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(array));
  }, [array]);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    if (e.target.name === "name") {
      setUserErr(
        e.target.value.length < 7 ? "Minimum 7 characters required!!" : ""
      );
    } else if (e.target.name === "pass") {
      setPassErr(
        e.target.value.length < 7
          ? "Password should not be less than six characters!!"
          : ""
      );
    } else if (e.target.name === "email") {
      setEmailErr(
        !e.target.value.includes("@gmail.com") ? "Invalid email format!!" : ""
      );
    } else if (e.target.name === "age") {
      setAgeErr(
        isNaN(e.target.value) || e.target.value < 18
          ? "Age Restriction!! Employee must be above than 18"
          : ""
      );
    }
  }

  function saveData(e) {
    e.preventDefault();
    if (!userErr && !passErr && !emailErr && !ageErr) {
      if (data.name && data.pass && data.email && data.age) {
        setArray([...array, data]);

        setData(person);
      } else {
        alert("Please fill the form before submitting.....");
      }
    } else {
      alert("Please fill the form according to the validation.....");
    }
  }

  return (
    <div className="div-form">
      <form className="form2" onSubmit={saveData}>
        <h1>Sign Up</h1>
        <div className="input">
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <br />
          <span>{userErr}</span>
        </div>
        <div className="input">
          <input
            type="password"
            name="pass"
            value={data.pass}
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <br />
          <span>{passErr}</span>
        </div>
        <div className="input">
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter your E-mail"
            onChange={handleChange}
          />
          <br />
          <span>{emailErr}</span>
        </div>
        <div className="input">
          <input
            type="number"
            name="age"
            value={data.age}
            placeholder="Enter your age"
            onChange={handleChange}
          />
          <br />
          <span>{ageErr}</span>
        </div>
        <button>Submit</button>
        <div className="more">
          already have an account?
          <NavLink className={"link"} to="/">
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Form2;
