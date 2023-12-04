import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedFile = (prop) => {
  let CMP = prop.Cmp;
  let Nav = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("formData")) {
      Nav("/");
    }
  }, [Nav]);
  return (
    <>
      {" "}
      <CMP />
    </>
  );
};

export default ProtectedFile;
