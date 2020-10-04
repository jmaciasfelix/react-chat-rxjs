import React, { useState } from "react";
import { useChat } from "../hooks/useChat";

export const UserChat = ({nameUser = "Anonimo"}) => {
  const [msg, setMsg] = useState("");
  
  const {chatState, chatStore} = useChat();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const messageObject = {
      person: "first-person",
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
          <div key={index}>
            <p className={`${message.person} msg-chat`}>{message.text}</p>
            <div className="clear"></div>
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
