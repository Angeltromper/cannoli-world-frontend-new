import React, { useEffect, useRef } from 'react';
import {useNavigate } from "react-router-dom";
import pageImg from "../../assets/img.header/homepage-background-2400.jpg";
import cannoliSnack from "./../../assets/img.background/background-cannoli-snack.png";
import cannoliGlutenFree from "./../../assets/img.background/background cannoli-glutenfree.png";
import cannoliVegan from "./../../assets/img.background/background cannoli vegan.png";
import cannoliGiftbox from "./../../assets/img.background/background giftbox.png";
import cannoliFranchise from "./../../assets/img.background/background-franchise.png";
import SearchButton from "../../components/button/searchButton/SearchButton.jsx";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import TextContainerResp from "../../components/pageLayout/designElement/container/textContainerResp/TextContainerResp";
import HandleRef from "./../../helpers/HandleRef";
import goUp from "./../../assets/navIcon/goUp.png";
import Button from "../../components/button/button/Button";
import './Homepage.css';


// eslint-disable-next-line react/prop-types
function Homepage ({headerImageHandler, pageTitleHandler}) {

    const navigate = useNavigate()

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    /*
    const [cannoliQuery, setCannoliQuery] = useState("");
    */

    const refSearch = useRef(null);

    function handleSelect(e){
        /*setCannoliQuery(e.target.value)*/

        navigate(`/${e.target.value}`)
        console.log('test')
    }

    return (

        <homepage className="homepage">
            <div className="skewer--top"></div>
            <div className="inner-container__reusable">
                <div className="search-query__section" ref={refSearch}>

                    <TextContainer>
                        <h1>Welkom op de site van Cannoli World</h1>
                    </TextContainer>

                    <div className="inner-container__reusable default-area-padding default-text-restrictor">
                        <div>
                            <section id="intro" className="intro-container">
                                <br/>
                                <h5>Graag willen wij de liefde voor Italië en de overheerlijke lekkernijen met u delen.We nemen u mee op reis.</h5>
                                <h5><strong>De reis begint hier:<em>`hoe de liefde voor cannoli is ontstaan`</em></strong></h5>
                                <h5><strong><em>Italië</em></strong> een land vol prachtige dorpjes en <strong><em>`heerlijke`</em></strong> gerechten. Het prachtige gardameer,</h5>
                                <h5>vrolijke huisjes, bergen en wijnheuvels. <strong><em>Italië</em></strong> een land met een geschiedenis.</h5>
                                <h5>De liefde voor Italië is ontstaan door het velen reizen door mooie gebieden van het land.</h5>
                                <br/>
                                <br/>
                                <h5>Banketbakkerijen met de overheerlijke cannolis. De bekende cannoli met ricotta.</h5><h5>De smaak mogelijkheden zouden oneindig moeten zijn.</h5>
                                <h5>Dit in een nieuw cannoli jasje alleen wel in de goede smaak combinatie.</h5>
                                <br/>
                                <br/>
                                <h5>Door de ervaringen en de Italiaanse banketbakkerij zijn wij toen begonnen met het</h5>
                                <h5>opzetten van een breed assortiment van verkoop van verse cannolis.</h5>
                            </section>
                        </div>
                    </div>
                    <br/>
                    <image className="cannoli-image">
                        <figure><img src={cannoliSnack} alt="cannoli-snack" className="cannoli-img"/></figure>
                        <figure><img src={cannoliGlutenFree} alt="cannoli-glutenfree" className="cannoli-img"/></figure>
                        <figure><img src={cannoliVegan} alt="cannoli-vegan" className="cannoli-img"/></figure>
                        <figure><img src={cannoliGiftbox} alt="cannoli-giftbox" className="cannoli-img"/></figure>
                        <figure><img src={cannoliFranchise} alt="cannoli-franchise" className="cannoli-img"/></figure>
                    </image>

                    <div className="product-container">

                        <fieldset>
                            <label htmlFor="search-by-cannoli-snack">
                                <select
                                    id="search-by-cannoli-snack"
                                    className="input-field__reusable input-field__select-information"
                                    onChange={ handleSelect }
                                    defaultValue='DEFAULT'
                                >
                                    <option disabled value='DEFAULT'>-- choose one option --</option>
                                    <option value="cannolisnack">Cannoli snack</option>
                                    <option value="cannoli-ingredient">Cannoli snack ingredient</option>
                                    <option value="cannoli-pricelist">Cannoli snack prijslijst</option>
                                </select>
                            </label>
                        </fieldset>



                        <fieldset>
                            <label htmlFor="search-by-cannoli-glutenfree">
                                <select
                                    id="search-by-cannoli-glutenfree"
                                    className="input-field__reusable input-field__select-information"
                                    onChange={ handleSelect }
                                    defaultValue='DEFAULT'
                                >
                                    <option disabled value='DEFAULT'>-- choose one option --</option>
                                    <option value="cannoliglutenfree">Cannoli glutenvrij</option>
                                    <option value="cannoli-ingredient">Cannoli glutenvrij ingredient</option>
                                    <option value="cannoli-pricelist">Cannoli glutenvrij prijslijst</option>
                                </select>
                            </label>
                        </fieldset>


                        <fieldset>
                            <label htmlFor="search-by-cannoli-vegan">
                                <select
                                    id="search-by-cannoli-vegan"
                                    className="input-field__reusable input-field__select-information"
                                    onChange={ handleSelect }
                                    defaultValue='DEFAULT'
                                >
                                    <option disabled value='DEFAULT'>-- choose one option --</option>
                                    <option value="cannolivegan">Cannoli vegan</option>
                                    <option value="cannoli-ingredient">Cannoli vegan ingredient</option>
                                    <option value="cannoli-pricelist">Cannoli vegan prijslijst</option>
                                </select>
                            </label>
                        </fieldset>


                        <fieldset>
                            <label htmlFor="search-by-giftbox">
                                <select
                                    id="search-by-giftbox"
                                    className="input-field__reusable input-field__select-information"
                                    onChange={ handleSelect }
                                    defaultValue='DEFAULT'
                                >
                                    <option disabled value='DEFAULT'>-- choose one option --</option>
                                    <option value="giftbox">Giftbox</option>
                                    <option value="giftbox-pricelist">Giftbox prijslijst</option>
                                </select>
                            </label>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="search-by-franchise">
                                <select
                                    id="search-by-franchise"
                                    className="input-field__reusable input-field__select-information"
                                    onChange={ handleSelect }
                                    defaultValue='DEFAULT'
                                >
                                    <option disabled value='DEFAULT'>-- choose one option --</option>
                                    <option value="franchise">Franchise</option>
                                    <option value="franchise-information">Franchise informatie</option>
                                </select>
                            </label>
                        </fieldset>
                    </div>
                    <br/>

                    <Button
                        onClick={ () => HandleRef (refSearch) }
                        type="submit"
                        text="zoeken"
                    />
                </div>




                <TextContainerResp>
                    <h3>We nemen u verder mee op reis:<em>`geschiedenis over de oorsprong van de cannoli`</em></h3>
                    <br/>
                    <h4>De geschiedenis over de oorsprong van de cannoli is waarschijnlijk een mix van alle legendes en
                        overtuigingen verzamelden doorgegeven door de eeuwen heen.
                        <em><strong>`Twee daarvan zijn de legendes` </strong></em>die vertellen over de oorsprong van
                        de cannoli. Beide van hen het eens over één ding: vrouwen zijn achter hun schepping die
                        plaatsvond
                        in of rond de stad Caltanissetta</h4>

                    <h3><strong><em>Het eerste verhaal:</em></strong></h3>
                    <h4>Brengt ons in de harem van een Arabische prins, tijdens de Arabische overheersing van het
                        eiland.Men zegt dat de concubines van
                        de emir gebak bakken als afleiding, onder hen, een cilinder-vorm pastei geval gevuld met
                        ricotta, amandelen en honing.
                        De Arabische oorsprong van de cannoli wordt ondersteund door het feit dat de stad Capitalises
                        historisch verbonden is met de
                        aanwezigheid van de Moren in Sicilië, zoals blijkt uit de
                        naam zelf, die voorkomt uit `kalf el nissa`, een Arabische locatie die `vrouwenkasteel` betekent.
                        Interessant, gezien de legende is gevestigd in een
                        kasteel en de uitvinding van de cannoli, volgens het, ligt in de vaardige handen van vrouwen.</h4>

                    <h3><strong><em>Volgens een ander verhaal:</em></strong></h3>
                    <h4>Werden cannoli voor het eerst gemaakt in een klooster in de buurt van Caltanissetta. Om het carnaval te vieren, `verzonnen`
                        de nonnen een buisvormig gebak gevuld met ricotta crème, chocoladeschilfers en gehakte hazelnoten.
                        Concubines of nonnen, het is zeker dat cannoli voor het eerst werden gemaakt ten tijde van de Arabische overheersing van
                        Sicillié suikerriet, rijst, amandelen, jasmijn, anijs, sesam, saffraan en kaneel gebracht, alle ingredienten sterk aanwezig in
                        de Siciliaanse keuken nog steeds vandaag. Zoals zo vaak het geval is, de waarheid over de historische oorsprong van cannoli is
                        waarschijnlijk een mix van alle legendes en overtuigingen verzameld en doorgegeven door de eeuwen heen.</h4>

                    <h3><strong><em>Het amandelkoekje:</em></strong></h3>
                    <h4>Is ontstaan vanuit een andere Siciliaanse zoet lekkernij, de `Frutta di Martorana` Deze traditionele lekkernij werd gemaakt
                        in de 16e eeuw door nonnen die in het klooster leefden. De aanleiding hiervan waren de voorbereidingen voor de festiviteiten die waren opgesteld
                        voor 2 november, de dag van aller zielen. Op deze dag zou de bisschop het klooster bezoeken, omdat zogezegd hij vele verhalen had gehoord over
                        de prachtige tuin met vele fruitbomen waar de nonnen het idee om van amandelspijs fruit te creëren omm zo de bomen en de tuin ermee te versieren.
                        Vandaag de dag vind je nog in vele winkeltjes in Sicillie deze frutta martorana, vaak prachtig verpakt in een rieten mandje of houten kistje.
                        De bijnaam van het Siciliaanse amandelkoekje is `pasta reale` dit omdat het geschikt voor de koning zou zijn vanwege de zoetigheid en de goedheid
                        van het koekje. Aan wie de eer van deze lekkernijen toe komt is nog steeds niet helemaal 100% zeker. Er gaat namelijk ook het verhaal te ronde
                        dat de Arabieren al in de 6e eeuw aan het experimenteren waren met suiker en amandelen.</h4>
                </TextContainerResp>
                <br/>

                <img alt="go-up-search-section" src={goUp} onClick={() => HandleRef(refSearch)}
                     className="search-result__go-up-icon"/>
            </div>
        </homepage>
    );
}


export default Homepage;










