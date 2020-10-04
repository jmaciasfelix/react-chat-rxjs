import React from "react";
import { UserChat } from "./components";
import "./App.css";

const App = () => (
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
    <div className="chat-grid">
      <UserChat nameUser="JesusMf" />
      <UserChat nameUser="Alvaro" />
      <UserChat nameUser="Alvaro" />
    </div>
  </>
);

export default App;
