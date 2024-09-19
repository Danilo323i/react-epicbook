import { Container, Row } from "react-bootstrap";
import fantasy from "../../assets/fantasy.json";
import horror from "../../assets/horror.json";
import history from "../../assets/history.json";
import romance from "../../assets/romance.json";
import scifi from "../../assets/scifi.json";
import BookCard from "../BookCard/BookCard";

const AllBook = [...fantasy,...horror,...history,...romance,...scifi]

const MainSection = () => {
  return (
    <Container>
      <Row>
        {AllBook
          .slice(0,20)
          .map((book) => (
            <BookCard
              title={book.title}
              img={book.img}
              category={book.category}
              price={book.price}
            />
          ))
          }
      </Row>
    </Container>
  );
};

export default MainSection;
