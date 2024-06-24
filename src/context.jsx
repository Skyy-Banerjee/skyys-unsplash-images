import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

// Function to get the initial dark mode preference
function getInitialDarkMode() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedDarkMode = localStorage.getItem('darkTheme');
    if (storedDarkMode === null) {
        return prefersDarkMode;
    }
    return storedDarkMode === 'true';
}

export function AppProvider({ children }) {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [searchTerm, setSearchTerm] = useState('pokemon');

    // Function to toggle the dark theme
    function toggleDarkTheme() {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
    }

    // Effect to add/remove the dark theme class on the body element
    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme);
    }, [isDarkTheme]);

    return (
        <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}>
            {children}
        </AppContext.Provider>
    );
}

// Custom hook to use the global context
export const useGlobalContext = () => useContext(AppContext);
