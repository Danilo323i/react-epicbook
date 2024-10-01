import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import "./themeSwitcher.css"


const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); //ottieni il tema e la funzione importandoli
    
    return (
        <div className="theme-switcher"> 
            <p>Non ti piace il tema {theme}</p>
            <button id="btn" onClick={toggleTheme}>
                cambia tema
            </button>
        </div>
    )

}

export default ThemeSwitcher;