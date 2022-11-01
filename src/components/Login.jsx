import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "../index.css";

import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Idaaka!</h2>
        <div className="login-button google">
          <GoogleOutlined
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }
          />{" "}
          Sign In with Google
          <br />
          <br />
        </div>
        <div className="login-button facebook">
          <FacebookOutlined
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
            }
          />{" "}
          Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
