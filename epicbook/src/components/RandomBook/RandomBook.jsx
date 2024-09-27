import { Button, Col, Collapse, Container, Row } from "react-bootstrap";
import { AllBook } from "../MainSection/MainSection";
import { useEffect, useState } from "react";
import "./RandomBook.css";

const RandomBook = ({ warning }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [randomBook, setRandomBook] = useState(null);

  useEffect(() => {
    // Verifica se il pannello è aperto e se ci sono libri disponibili
    if (isOpen && AllBook.length > 0) {
      // Crea un indice casuale per selezionare un libro
      const randomIndex = Math.floor(Math.random() * AllBook.length);
      setRandomBook(AllBook[randomIndex]);
    }
  }, [isOpen]); // Effettua l'aggiornamento solo quando cambia `isOpen`

  const handleClose = () => {
    // Impediamo che il click su `Chiudi` riapra subito il libro
    if (isOpen) {
      setIsOpen(false)
      setRandomBook(null) //per resettare il libro selezionato
    }
  }

  return (
    <div className="randomCard">
      <div className="d-flex">
        <h4 className="m-auto">Vuoi conoscere il libro del giorno?</h4>
        <Button
          className="m-auto"
          onClick={() => {
            setIsOpen((IsOpen) => !IsOpen);
          }}
        >
          Libro del giorno
        </Button>
      </div>
      <div>
        <Collapse in={isOpen}>
          {randomBook ? ( // Verifica che randomBook sia definito prima di usarlo
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
