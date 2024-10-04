import { createContext, useContext, useState } from "react";
import fantasy from "../../../epicbook/src/assets/fantasy.json";
import horror from "../../../epicbook/src/assets/horror.json";
import history from "../../../epicbook/src/assets/history.json";
import romance from "../../../epicbook/src/assets/romance.json";
import scifi from "../../../epicbook/src/assets/scifi.json";

// Creazione del contesto
export const BookContext = createContext();

// Custom hook per accedere al contesto
export const useBooks = () => useContext(BookContext);

// Provider per il contesto
export const BookProvider = ({ children }) => {
  const AllBooks = [...fantasy, ...horror, ...history, ...romance, ...scifi];
  const [books, setBooks] = useState(AllBooks);

  const searchBooks = (term) => {
    if (term === "") {
      setBooks(AllBooks);
    } else {
      const filteredBooks = AllBooks.filter((book) =>
        book.title.toLowerCase().includes(term.toLowerCase())
      );
      setBooks(filteredBooks);
    }
  };

  return (
    <BookContext.Provider value={{ books, searchBooks }}>
      {children}
    </BookContext.Provider>
  );
};
