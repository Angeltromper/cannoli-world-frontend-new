import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './Image_CannoliComponent.css';


export const Image_CannoliComponent = (props) => {
    const token = localStorage.getItem('token');
    const {cannoli_id} = useParams();
    const [file, setFile] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');
    const navigate = useNavigate();

    function handleImageChange(e) {
        const uploadFile = e.target.files[0];
        setFile(uploadFile);
        setPreviewUrl(URL.createObjectURL(uploadFile));
    }

    async function sendImage(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        try {
            await axios.put(`http://localhost:8080/cannolis/${cannoli_id}/image/`,formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${token}`,
                    },
                }).then(savedImage)
        } catch (e) {
            console.error(e)
        }
    }

    function savedImage() {
        navigate(`/cannoli-assorti/`)
    }

    return (

        <section className="cannoli-image-container">
            <h1>Cannoli afbeelding uploaden</h1>
            <form onSubmit={sendImage}>
                <label htmlFor="cannoli-image">
                    Kies afbeelding:
                    <input type="file" id="cannoli-image" onChange={handleImageChange}/>
                </label>
                {previewUrl &&
                    <label>
                        Voorbeeld:
                        <img src={previewUrl} alt="Een voorbeeld van de afbeelding die zojuist is gekozen"
                             className="image-preview"/>
                    </label>
                }
                <br/>
                <div className="image-button">
                    <button
                        className="image-upload-button"
                        type="submit">
                        Uploaden afbeelding
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Image_CannoliComponent;
