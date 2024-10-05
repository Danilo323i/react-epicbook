import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MainSection from "./components/MainSection/MainSection";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { BookProvider } from "./context/BooksContext";
import RandomBook from "./components/RandomBook/RandomBook";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookDetail from "./components/BookDetail/BookDetail";

const App = () => {
  return (
    <ThemeProvider>
      <BookProvider>
        <Router>
          <MyNavbar />
          <ThemeSwitcher />
          <RandomBook />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/books/:bookId" element={<BookDetail />} />
          </Routes>
        </Router>
      </BookProvider>
    </ThemeProvider>
  );
};

export default App;
