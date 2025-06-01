import React, { useState, useEffect } from "react";
import './CookiesPage.css';


const CookiesPage = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (

        <div className="cookies-page">
            <div className="cookies-page__header">
                <h2>Kennisgeving</h2><br />
                Wij en geselecteerde derden gebruiken cookies of vergelijkbare technologie voor technische doeleinden en, met uw toestemming, voor andere doeleinden als aangegeven in het{" "}
                <a
                    href="/cookiebeleid"
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    cookiebeleid
                </a>.
                Gebruik de knop “Accepteren” om toestemming te geven. Gebruik de knop “Afwijzen” of sluit deze kennisgeving om door te gaan zonder te accepteren.
            </div>
            <div className="flex flex-col md:flex-row gap-2">
                <button
                    className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full"
                    onClick={() => window.location.href = "/cookiebeleid"}
                >
                    Meer informatie en aanpassen
                </button>
                <button
                    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
                    onClick={handleDecline}
                >
                    Afwijzen
                </button>
                <button
                    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
                    onClick={handleAccept}
                >
                    Accepteren
                </button>
            </div>
        </div>
    );
};

export default CookiesPage;
