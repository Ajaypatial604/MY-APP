import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>404 ERROR !!</h1>
      <h4>
        This page is not existed. <br />
        Go back to home page.
      </h4>
      <NavLink
        style={{ color: "blue", textDecoration: "underline" }}
        className={"links"}
        to={"/home"}
      >
        Home
      </NavLink>
    </div>
  );
};

export default Page404;
