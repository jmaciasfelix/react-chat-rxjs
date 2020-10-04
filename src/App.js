import React from "react";
import { UserChat } from "./components";
import "./App.css";

const App = () => {
  const users = [];
  return (
    <>
      <div className="nav">
        <div className="nav-title">
          Chat React{" "}
          <span role="img" aria-label="shark-emoji">
            ⚛️
          </span>{" "}
          and RxJS{" "}
          <span role="img" aria-label="shark-emoji">
            🦈
          </span>{" "}
        </div>
        <button className="nav-btn">+</button>
      </div>
      {users.length ? (
        <div className="chat-grid">
          <UserChat nameUser="JesusMf" />
          <UserChat nameUser="Alvaro" />
          <UserChat nameUser="Alvaro" />
        </div>
      ) : (
        <h1 className="inform">Create new users to test the chat</h1>
      )}
    </>
  );
};

export default App;
