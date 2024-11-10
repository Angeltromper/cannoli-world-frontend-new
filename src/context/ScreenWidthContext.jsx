// eslint-disable-next-line no-unused-vars
import React, {createContext, useEffect, useState} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ScreenWidthContext = createContext({});

// eslint-disable-next-line react/prop-types
const ScreenWidthContextProvider = ({ children }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);

        return () => window.removeEventListener("resize", changeWidth);
    }, []);

    const data = {
        screenWidth: screenWidth,
    };

    return (
        <ScreenWidthContext.Provider value={data}>
            {children}
        </ScreenWidthContext.Provider>
    );
};

export default ScreenWidthContextProvider;
