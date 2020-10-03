import React, { useState, useLayoutEffect } from "react";
import chatStore from "../store/chatStore";

const FirstPerson = () => {
  const [chatState, setChatState] = useState(chatStore.initialState);
  const [msg, setMsg] = useState("");

  useLayoutEffect(() => {
    let isMounted = true;
    let subscription
    if (isMounted) {
      subscription = chatStore.subscribe(setChatState);
      chatStore.init();
    }
    return () => {
      isMounted = false;
      subscription && subscription.unsubscribe();
    };
  }, []);

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
    <div className="container">
      <h2>Mycroft</h2>
      <div className="chat-box">
        {chatState.data.map((message, index) => (
          <div key={index}>
            <p className={message.person}>{message.text}</p>
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
      <button className="clear-button" onClick={() => chatStore.clearChat()}>
        Clear Chat
      </button>
    </div>
  );
};

export default FirstPerson;
