import React, { useState } from "react";
import "./SignIn.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

const SignIn = () => {
  let Nav = useNavigate();
  let [type, setType] = useState(false);
  let [name, setName] = useState();
  let [password, setPassword] = useState();
  function handleEdit(e) {
    if (e.target.name === "name") {
      setName(e.target.value);
    }

    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }
  function saveData(e) {
    e.preventDefault();
    let storedData = JSON.parse(localStorage.getItem("formData")) || [];
    let enteredName = name;
    let enteredPassword = password;
    if (enteredName && enteredPassword) {
      let matchingCredential = storedData.find(
        (v) => v.name === enteredName && v.pass === enteredPassword
      );
      if (matchingCredential) {
        alert("Login Successfully!!");
        setName("");
        setPassword("");
        Nav("/home");
      } else {
        alert("Incorrect Details!!");
      }
    } else {
      alert("Please enter both name and password!!");
    }
  }
  return (
    <div className="cd">
      <form className="form" onSubmit={saveData}>
        <h1>Sign-In</h1>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter your username"
          onChange={handleEdit}
        />
        <div style={{ width: "100%" }}>
          <input
            style={{ marginLeft: "15px" }}
            type={type ? "text" : "password"}
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleEdit}
          />
          <span
            className="eyeIcon"
            onClick={() => {
              return setType(!type);
            }}
          >
            <AiFillEye />
          </span>
        </div>
        <button>Log In</button>
        <div className="more">
          Don't have an account? <NavLink to="/signUp">Sign-Up?</NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
