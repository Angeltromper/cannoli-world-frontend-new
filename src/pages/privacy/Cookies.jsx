import React, { useEffect } from 'react';


function Cookies([headerImageHandler, pageTitleHandler]) {

    useEffect(() => {
        headerImageHandler();
        pageTitleHandler("Cookies");
    }, []);


    return (
        <div>

            <div className="cookies-title">
                <h1>{ pageTitleHandler }</h1>
            </div>

            <h5>
                Deze website maakt gebruik van cookies
                Wij gebruiken analytische cookies om je een optimale gebruikerservaring te bieden en we gebruiken
                functionele cookies om jouw voorkeuren op te slaan. Bovendien plaatsen wij cookies van derde partijen om
                gepersonaliseerde advertenties te tonen en de inhoud van de advertenties op jouw voorkeuren af te
                stemmen.
                Ook worden er cookies geplaatst door sociale media-netwerken. Jouw internetgedrag kan door deze derden
                gevolgd worden. Door op 'Zelf instellen' te klikken, kun
                je meer lezen over onze cookies en je voorkeuren aanpassen. Door op 'Accepteren en doorgaan' te klikken,
                ga je akkoord met het gebruik van alle cookies zoals omschreven
                in onze Cookieverklaring.
            </h5>
        </div>
    );
}


export default Cookies;
