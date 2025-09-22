import 'react';


function TextContainer({children}) {
    return (
        <div>
            <section className="page-content">
                { children }
            </section>

        </div>
    );
}


export default TextContainer;
