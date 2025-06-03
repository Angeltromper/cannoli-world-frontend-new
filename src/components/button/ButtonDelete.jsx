import React from "react";
import { Trash2 } from "lucide-react";
import './ButtonDelete.css';

function ButtonDelete() {
    return (
        <div className="button-delete-container">
            <Trash2 size={18} />
            <span>Verwijder</span>
        </div>
    );
}

export default ButtonDelete;
