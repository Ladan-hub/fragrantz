import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CommentForm from ".";

function CommentFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="comment-button" onClick={() => setShowModal(true)}>
        Comment
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentForm />
        </Modal>
      )}
    </>
  );
}

export default CommentFormModal;
