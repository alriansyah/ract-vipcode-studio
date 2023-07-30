import { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
    const [isDarkMode, setiSDarkMode] = useState(false);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, setiSDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;