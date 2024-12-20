import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
    }, [theme])
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeContext}
export default ThemeProvider