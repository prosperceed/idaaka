import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../index.css";

import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2 className="text-white text-4xl">Welcome to Ida'oka App!</h2>
        <Link
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign In with Google
        </Link>
        <Link
          className="login-button facebook text-2xl"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined /> Sign In with Facebook
        </Link>
      </div>
    </div>
  );
};

export default Login;
