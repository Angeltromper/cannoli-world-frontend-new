import "react";
import { Trash2 } from "lucide-react";
import './ButtonDelete.css';

export default function ButtonDelete({ onClick }) {
    return (
        <button
            type="button"
            className="delete-button"
            onClick={onClick}
        >
            <Trash2 size={16} style={{ marginRight: '0.5rem '}} />
            Verwijder
        </button>
    );
}
