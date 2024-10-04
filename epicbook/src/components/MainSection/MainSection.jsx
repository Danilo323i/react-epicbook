import { Container, Row } from "react-bootstrap";
import BookCard from "../BookCard/BookCard";
import { useBooks } from "../../context/BooksContext"; // Usa il custom hook

const MainSection = () => {
  const { books } = useBooks(); // Usa il custom hook per accedere ai libri filtrati

  return (
    <Container>
      <Row>
        {books.slice(0, 20).map((book) => (
          <BookCard
            key={book.asin}
            title={book.title}
            img={book.img}
            category={book.category}
            price={book.price}
          />
        ))}
      </Row>
    </Container>
  );
};

export default MainSection;

