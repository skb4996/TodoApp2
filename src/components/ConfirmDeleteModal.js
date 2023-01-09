import React from 'react';

const ConfirmDeleteModal = ({ showModal, setShowModal, handleDelete }) => {
    return (
      <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Delete</h5>
            <button
              type="button"
              className="close"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this task?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
              Cancel
            </button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>
            Delete
</button>
</div>
</div>
</div>
);
};

export default ConfirmDeleteModal;