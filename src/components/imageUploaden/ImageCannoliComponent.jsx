import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ImageCannoliComponent.css";
import pageImg from "../../assets/img.background/background cannolis.jpg";

export const ImageCannoliComponent = ({ headerImageHandler, pageTitleHandler }) => {
    const token = localStorage.getItem("token");
    const { cannoli_id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [previewUrl, setPreviewUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const backTo = location.state?.from ?? `/wholesale/${cannoli_id}`;

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Afbeelding uploaden");
    }, [headerImageHandler, pageTitleHandler]);

    useEffect(() => {
        async function fetchCannoli() {
            try {
                const { data } = await axios.get(`http://localhost:8080/cannolis/${cannoli_id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setImageUrl(data?.image?.url || "");
            } catch (e) {
                console.error(e);
            }
        }
        fetchCannoli();
    }, [cannoli_id, token]);

    function handleImageChange(e) {
        const uploadFile = e.target.files?.[0];
        if (!uploadFile) return;
        setFile(uploadFile);
        setFileName(uploadFile.name);
        setPreviewUrl(URL.createObjectURL(uploadFile));
    }

    async function sendImage(e) {
        e.preventDefault();
        if (!file) return;

        const url = `http://localhost:8080/cannolis/${cannoli_id}/image`;
        const formData = new FormData();
        formData.append("file", file);

        try {
            await axios.put(url, formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            URL.revokeObjectURL(previewUrl);
            navigate(backTo, { replace: true });
        } catch (e) {
            console.error("Upload error:", e?.response?.status, e?.response?.data || e.message);
            alert("Uploaden mislukt.");
        }
    }

    async function handleDownload() {
        if (!imageUrl) return;
        try {
            const res = await axios.get(imageUrl, {
                responseType: "blob",
                headers: { Authorization: `Bearer ${token}` },
            });
            const url = URL.createObjectURL(res.data);
            const a = document.createElement("a");
            a.href = url;
            a.download = `cannoli-${cannoli_id}.jpg`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        } catch (e) {
            console.error(e);
            alert("Download mislukt.");
        }
    }

    return (
        <section className="cannoli-image-container">
            <form onSubmit={sendImage}>
                <div className="button-row">
                    <label htmlFor="cannoli-image" className="btn btn-secondary">Kies afbeelding</label>
                    <input
                        id="cannoli-image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        hidden
                    />

                    <button type="submit" className="btn btn-primary" disabled={!file}>
                        Uploaden afbeelding
                    </button>

                    <button
                        type="button"
                        className="btn btn-third"
                        onClick={handleDownload}
                        disabled={!imageUrl}
                        title={!imageUrl ? "Geen bestaande afbeelding" : "Download huidige afbeelding"}
                    >
                        Download huidige afbeelding
                    </button>
                </div>

                {fileName && <p className="file-hint">{fileName}</p>}

                {previewUrl && (
                    <div className="preview-wrapper">
                        Voorbeeld:
                        <img
                            src={previewUrl}
                            alt="Voorbeeld van de gekozen afbeelding"
                            className="image-preview"
                        />
                    </div>
                )}
            </form>
        </section>
    );
};

export default ImageCannoliComponent;
