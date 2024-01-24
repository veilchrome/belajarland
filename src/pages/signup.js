// pages/signup.js

import React from "react";
import Form from "../components/Form";

const SignUp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "centre",
        alignItems: "centre",
        height: "100vh",
      }}
    >
      <h1>Sign Up</h1>
      <Form />
    </div>
  );
};

export default SignUp;
