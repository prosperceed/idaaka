import React, { useState, useEffect } from "react";
import { ChatEngine } from "react-chat-engine";
import { useHistory } from "react-router-dom";

import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
const Chats = () => {
  const history = useHistory();
  const [loading, setLoading] = useState();

  const { user } = useAuth();

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "75cd77a0-02af-48d4-804c-9d53030fb2a0",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-keys": process.env.REACT_APP_CHAT_ENGINE_KEY,
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, []);

  if (!user || loading) return "Loading...";

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };
  return (
    <div className="chat-page">
      <div className="nav-bar">
        <div className="logo-tab">Idaaka</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 200px)"
        projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
