import React from 'react';

const ConfirmPopup = ({title, message, onCancel, onConfirm}) => {
    return (
        <div className="modal-overlay" onClick={onCancel}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>{title}</h3>
                <p>{message}</p>
                <div className="modal-grid">
                    <button className="modal-button" onClick={onCancel}>Annuleren</button>
                    <button className="modal-button" onClick={onConfirm}>Verwijderen</button>
                </div>
            </div>
        </div>
);
};

export default ConfirmPopup;
