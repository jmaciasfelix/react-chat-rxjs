import React from "react";
import { UserChat, ModalUser } from "./components";

const App = () => {
  const [users, setUsers] = React.useState(["Jesus", "Alvaro"]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

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
        <button onClick={openModal} className="btn">
          +
        </button>
        {modalIsOpen ? (
          <ModalUser
            setUsers={setUsers}
            modalIsOpen={modalIsOpen}
            users={users}
            setIsOpen={setIsOpen}
          />
        ) : null}
      </div>
      {users.length ? (
        <div className="chat-grid">
          {users.map((user) => (
            <UserChat key={user} nameUser={user} />
          ))}
        </div>
      ) : (
        <h1 className="inform">Create new users to test the chat</h1>
      )}
    </>
  );
};

export default App;
