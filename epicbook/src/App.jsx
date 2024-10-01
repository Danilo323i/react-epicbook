import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MainSection from "./components/MainSection/MainSection";
import RandomBook from "./components/RandomBook/RandomBook";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

const App = () => {
  const warning = () => {
    alert("hello");
  };

  return (
    <>
    <ThemeProvider>
      <ThemeSwitcher/>
      <MyNavbar />
      <RandomBook warning={warning} />
      <MainSection />
    </ThemeProvider>
    </>
  );
};

export default App;
