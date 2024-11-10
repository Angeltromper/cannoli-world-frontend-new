
// eslint-disable-next-line no-unused-vars
import React, {createContext, useState} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const cannoliContext = createContext({});


// eslint-disable-next-line react/prop-types
function CannoliContextProvider({children}) {
    const [cannoli, setCannoli] = useState('');
    const [cannoliList, setCannoliList] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [ingredientList, setIngredientList] = useState([]);
    const [snack, setSnack] = useState([]);
    const [glutenFree, setGlutenFree] = useState([]);
    const [vegan, setVegan] = useState([]);
    const [giftbox, setGiftbox] = useState([]);
    const [priceList, setPriceList] = useState([]);

    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [pageTitle, setPageTitle] = useState('');
    const [searchText, setSearchText] = useState('');

    const[letter, setLetter] = useState('A');
    const[numberToLetter, setNumberToLetter] = useState(1);


    const data= {
        cannoli,
        setCannoli,
        cannoliList,
        setCannoliList,
        searchResult,
        setSearchResult,
        ingredientList,
        setIngredientList,
        snack,
        setSnack,
        glutenFree,
        setGlutenFree,
        vegan,
        setVegan,
        giftbox,
        setGiftbox,
        priceList,
        setPriceList,
        errorMessage,
        setErrorMessage,
        loading,
        setLoading,
        pageTitle,
        setPageTitle,
        searchText,
        setSearchText,
        letter,
        setLetter,
        numberToLetter,
        setNumberToLetter
    };

    return (<cannoliContext.Provider value={data}>
            {children}
        </cannoliContext.Provider>
    );
}

export default CannoliContextProvider;
