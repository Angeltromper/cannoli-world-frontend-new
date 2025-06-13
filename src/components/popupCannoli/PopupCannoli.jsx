import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PopupCannoli.css';

function Popup({ title, variants, onClose }) {
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/wholesale/${id}`);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>Varianten van: {title}</h3>
                <div className="modal-grid">
                    {variants.map((variant,index) => (
                        <button
                            key={index}
                            className={ `modal-button ${variant.available === false ? 'modal-button-disabled' : ''}`}
                            onClick={() => {
                                if (variant.available !== false) {
                                    handleNavigate (variant.id);
                                }
                            }}
                            disabled={ variant.available === false }
                        >
                            {variant.label}
                        </button>
                    ))}
                </div>
                <button className="modal-close-button" onClick={onClose}>
                    Sluiten
                </button>
            </div>
        </div>
    );
}

export default Popup;
