import React from "react";
import { Trash2 } from "lucide-react";
import './ButtonDelete.css';

export default function ButtonDelete({ onClick }) {
    return (
        <button
            type="button"
            className="delete-button"
            onClick={onClick}
        >
            Verwijder
        </button>
    );
}

