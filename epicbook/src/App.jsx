import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MainSection from "./components/MainSection/MainSection";
import RandomBook from "./components/RandomBook/RandomBook";

const App = () => {
  const warning = () => {
    alert("hello");
  };

  return (
    <>
      <MyNavbar />
      <RandomBook warning={warning} />
      <MainSection />
    </>
  );
};

export default App;
