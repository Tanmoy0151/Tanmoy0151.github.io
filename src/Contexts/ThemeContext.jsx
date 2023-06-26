
import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");



    return <ThemeContext.Provider value={[theme, setTheme]} >
        {children}
    </ThemeContext.Provider>
}





/*  =============== This for Chenging Theme ============ */


export const chengeTheme = (themeProps) => {
    for (let key in themeProps) {
        document.documentElement.style.setProperty(key, themeProps[key]);
    }
};

export const changeCSSVariable = (theme) => {
    if (theme === 'dark') {
        chengeTheme({
            '--title-color': '#f37b23',
            '--title-color-dark': '#ff4a57',
            '--text-color': '#ffffff',
            '--body-color': '#1f2235',
            '--container-color': '#272a3f',
        });
    } else if (theme === 'light') {
        chengeTheme({
            '--title-color': 'hsl(var(--hue), var(--sat), 20%)',
            '--title-color-dark': 'hsl(var(--hue), var(--sat), 0%)',
            '--text-color': 'hsl(var(--hue), var(--sat), 46%)',
            '--body-color': 'hsl(var(--hue), var(--sat), 98%)',
            '--container-color': '#fff',
        });
    }
};