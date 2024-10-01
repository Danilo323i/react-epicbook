import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MainSection, { AllBook } from "./components/MainSection/MainSection";
import RandomBook from "./components/RandomBook/RandomBook";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { useState } from "react";
import SearchBook from "./context/SearchBook";

const App = () => {

  const warning = () => {
    alert("hello");
  };
  const [books, setBooks] = useState(AllBook);

  return (
    <>
      <ThemeProvider>

        <MyNavbar>
          <SearchBook books={books} setBooks={setBooks} allBooks={AllBook} />
        </MyNavbar>
        
        <ThemeSwitcher />
        <RandomBook warning={warning} />
        <MainSection />
      </ThemeProvider>
    </>
  );
};

export default App;
