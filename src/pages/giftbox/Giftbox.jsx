import  { useEffect, useRef } from 'react';
import pageImg from '../../assets/background giftbox.jpg';
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import './Giftbox.css';

function Giftbox({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler ("Giftbox");
    }, [headerImageHandler, pageTitleHandler]);

    const refSearch = useRef(null);

    return (
        <div className="giftbox">
            <div className="inner-container__reusable">
                <div className="search-query__section" ref={refSearch}>

                    <TextContainer>
                        <h1>Cannoli in een mooi geschenkdoos</h1>
                    </TextContainer>

                    <div>
                        <section id="geschenk" className="geschenk-container">
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ea iste tenetur. Alias atque debitis
                            fugit in ipsam laborum modi neque optio saepe, sed. Aliquid at dolore eligendi et excepturi hic incidunt
                            labore maiores, molestiae omnis provident quis, quod repellendus repudiandae soluta suscipit velit voluptates.
                            Animi aperiam aut cupiditate ducimus eius itaque iusto, molestias mollitia nemo nulla numquam suscipit totam?
                        </section>
                    </div>
                </div>

                <img alt="go-up-search-section" src={goUp} onClick={() => HandleRef(refSearch)}
                     className="search-result__go-up-icon"/>
                <br/>
            </div>
        </div>
    );
}


export default Giftbox;

