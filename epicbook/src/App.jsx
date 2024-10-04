import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MainSection from "./components/MainSection/MainSection";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { BookProvider } from "./context/BooksContext";
import RandomBook from "./components/RandomBook/RandomBook";
 // Importa BookProvider

const App = () => {
  return (
    <ThemeProvider>
      <BookProvider>{/* Wrappa tutta l'app nel BookProvider */}
        <MyNavbar />
        <ThemeSwitcher />
        <RandomBook/>
        <MainSection />
        </BookProvider>
    </ThemeProvider>
  );
};

export default App;
