import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import BookCard from "../BookCard/BookCard";
import { useBooks } from "../../context/BooksContext"; 

const MainSection = () => {
  const { books } = useBooks();
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleSelectBook = (bookId) => {
    setSelectedBookId(bookId); 
  };

  return (
    <Container>
      <Row>
        {books.slice(0, 20).map((book) => (
          <BookCard
            key={book.asin}
            id={book.asin}
            title={book.title}
            img={book.img}
            category={book.category}
            price={book.price}
            isSelected={selectedBookId === book.asin}
            onSelect={() => handleSelectBook(book.asin)}
          />
        ))}
      </Row>
    </Container>
  );
};

export default MainSection;
