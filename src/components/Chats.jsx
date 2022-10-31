import React, { useState, useEffect } from "react";
import { ChatEngine } from "react-chat-engine";
import { useHistory } from "react-router-dom";

const Chats = () => {
  const history = useHistory();
  const [loading, setLoading] = useState();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
  }, []);
  return (
    <div>
      <ChatEngine height="calc(100vh -200px)" />
    </div>
  );
};

export default Chats;
