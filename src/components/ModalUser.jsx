import React from "react";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

export const ModalUser = ({ modalIsOpen, setUsers, users, setIsOpen }) => {
  const [userChat, setUserChat] = React.useState("");

  const createUserChat = (e) => {
    e.preventDefault();
    setUsers([...users, userChat]);
    setUserChat("");
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      contentLabel="Example Modal"
      className="modal-style"
    >
      <div>
        <h2 className="title-modal">Create a User</h2>
        <form onSubmit={createUserChat}>
          <input
            className="input-modal"
            type="text"
            required
            placeholder="Username..."
            value={userChat}
            onChange={(e) => setUserChat(e.target.value)}
          />
          <button type="submit" className="btn-modal">
            Set user
          </button>
          <button onClick={() => setIsOpen(false)} className="btn-close">
            Close
          </button>
        </form>
      </div>
    </Modal>
  );
};
