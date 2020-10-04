import React, { useState } from "react";
import { useChat } from "../hooks/useChat";

export const UserChat = ({ nameUser = "Anonimo" }) => {
  const [msg, setMsg] = useState("");

  const { chatState, chatStore } = useChat();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const messageObject = {
      person: nameUser,
      text: msg,
    };
    chatStore.sendMessage(messageObject);
    setMsg("");
  };

  return (
    <div className="container-chat">
      <h2>{nameUser}</h2>
      <div className="chat-box">
        {chatState.data.map((message, index) => (
          <div className="container-msg" key={index}>
            {message.person === nameUser ? (
              <p className="first-person msg-chat">{message.text}</p>
            ) : (
              <p className="second-person msg-chat">{message.text}</p>
            )}
          </div>
        ))}
      </div>
      <form id="messageForm" onSubmit={onFormSubmit}>
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Write a message..."
          required
        />
        <button>Send</button>
      </form>
      <button className="clear-button" onClick={() => chatStore.clear()}>
        Clear Chat
      </button>
    </div>
  );
};
