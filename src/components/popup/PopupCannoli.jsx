import 'react';
import { useNavigate } from 'react-router-dom';
import './Popup.css';

function Popup({ title = '', variants = [], onClose }) {
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        if (id) {
            navigate(`/wholesale/${id}?readonly=true`);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3 className="modal-title">Varianten van: {title}</h3>

                <div className="modal-grid">
                    {variants.length > 0 ? (
                        variants.map((variant, index) => {
                            const isDisabled = variant.available === false;
                            return (
                                <button
                                    key={index}
                                    className={`modal-button ${isDisabled ? 'modal-button-disabled' : ''}`}
                                    onClick={() => !isDisabled && handleNavigate(variant.id)}
                                    disabled={isDisabled}
                                >
                                    {variant.label}
                                </button>
                            );
                        })
                    ) : (
                        <p className="modal-empty">Geen varianten beschikbaar.</p>
                    )}
                </div>

                <button className="modal-close-button" onClick={onClose}>
                    Sluiten
                </button>
            </div>
        </div>
    );
}

export default Popup;
