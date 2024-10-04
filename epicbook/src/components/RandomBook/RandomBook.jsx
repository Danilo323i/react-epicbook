import { Button, Col, Collapse, Container, Row } from "react-bootstrap";
import { useBooks } from "../../context/BooksContext"; // Usa il contesto per ottenere `books`
import { useEffect, useState } from "react";
import "./RandomBook.css";

const RandomBook = ({ warning }) => {
  const { books } = useBooks(); // Ottieni i libri dal contesto
  const [isOpen, setIsOpen] = useState(false);
  const [randomBook, setRandomBook] = useState(null);

  const togglePanel = () => setIsOpen((prev) => !prev); // Funzione toggle per aprire/chiudere

  useEffect(() => {
    if (isOpen && books.length > 0) {
      // Crea un indice casuale per selezionare un libro solo se il pannello è aperto
      const randomIndex = Math.floor(Math.random() * books.length);
      setRandomBook(books[randomIndex]);
    } else {
      // Quando il pannello si chiude, resetta il libro casuale
      setRandomBook(null);
    }
  }, [isOpen, books]); // Effettua l'aggiornamento quando cambia `isOpen` o `books`

  const handleClose = () => {
    setIsOpen(false); // Chiude il pannello senza riaprirlo subito dopo
  };

  return (
    <div className="randomCard">
      <div className="d-flex">
        <h4 className="m-auto">Vuoi conoscere il libro del giorno?</h4>
        <Button className="m-auto" onClick={togglePanel}>
          Libro del giorno
        </Button>
      </div>
      <div>
        <Collapse in={isOpen}>
          {randomBook ? (
            <Container className="d-flex justify-content-center">
              <Row className="justify-content-center">
                <Col className="text-center">
                  <span>{randomBook.category}</span>
                  <h1 className="display-3 fw-bold mb-3">Libro del giorno</h1>
                  <div className="cardImg">
                    <img
                      src={randomBook.img}
                      alt="Libro del giorno"
                      className="w-150 h-100"
                    />
                  </div>
                  <p className="lead mb-3">{randomBook.title}</p>
                  <Button className="btn btn-info text-white" onClick={warning}>
                    Acquista a: {randomBook.price}$
                  </Button>
                  <Button
                    className="btn btn-secondary text-white"
                    onClick={handleClose}
                  >
                    Chiudi
                  </Button>
                </Col>
              </Row>
            </Container>
          ) : (
            <p>Caricamento...</p> // Mostra un messaggio di caricamento finché randomBook non è definito
          )}
        </Collapse>
      </div>
    </div>
  );
};

export default RandomBook;
