import React from "react";
import { UserChat } from "./components";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement(document.getElementById("root"));

const App = () => {
  const users = [];
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [userChat, setUserChat] = React.useState("");

  function openModal() {
    setIsOpen(true);
  }

  const createUserChat = (e) => {
    e.preventDefault();
    users.push(userChat);
    console.log(users.length)
    setUserChat("");
    setIsOpen(false);
  };

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
        <button onClick={openModal} className="nav-btn">
          +
        </button>
        <Modal
          isOpen={modalIsOpen}
          contentLabel="Example Modal"
          className="modal-style"
        >
          <div>
            <h2>Create a User</h2>
            <form onSubmit={createUserChat}>
              <input
                type="text"
                placeholder="Username..."
                value={userChat}
                onChange={(e) => setUserChat(e.target.value)}
              />
              <button>Set user</button>
            </form>
          </div>
        </Modal>
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
