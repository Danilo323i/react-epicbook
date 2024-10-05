import { useContext } from "react";

import { FormControl, Navbar } from "react-bootstrap";
import { BookContext } from "../../context/BooksContext";

const MyNavbar = () => {
  const { searchBooks, searchTerm } = useContext(BookContext);

  const handleSearchChange = (e) => {
    searchBooks(e.target.value); // Aggiorna il filtro dei libri
  };

  return (
    <Navbar bg="light" expand="lg" className="px-3 d-flex justify-content-between">
      <Navbar.Brand href="http://localhost:5173/">EpicBook</Navbar.Brand>
      <FormControl
        type="text"
        placeholder="Search for books"
        value={searchTerm}
        onChange={handleSearchChange} // Aggiorna il contesto quando l'utente scrive nella barra di ricerca
        className="ml-auto"
        style={{ width: "300px" }}
      />
    </Navbar>
  );
};

export default MyNavbar;
