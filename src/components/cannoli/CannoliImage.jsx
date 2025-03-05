import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './CannoliImage.css';



export const CannoliImage = () => {

    const {id} = useParams();
    const token = localStorage.getItem('token');
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
            await axios.put(`http://localhost:8080/cannolis/${id}/image/`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
/*                        "Authorization": `Bearer ${token}`,*/
                    },
                }).then(savedImage)
        } catch (e) {

            console.error(e)
        }
    }




}

export default CannoliImage;

