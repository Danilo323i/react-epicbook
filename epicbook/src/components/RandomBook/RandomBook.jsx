import { Button, Col, Collapse, Container, Row } from "react-bootstrap";
import { AllBook } from "../MainSection/MainSection";
import { useState } from "react";

const RandomBook = ({ warning }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);

  const randomIndex = Math.floor(Math.random() * AllBook.length);
  const random = AllBook[randomIndex];

  console.log(random);

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)}>Libro del giorno</Button>
      <Collapse in={isOpen}>
        <Container className="pt-5 pb-5 m-auto">
          <Row className="pt-5 pb-5 m-auto">
            <Col lg={12} className="m-auto">
              <span>{random.category}</span>
              <h1 className="display-3 fw-bold mb-3">Libro del giorno</h1>
              <div>
                <img
                  src={random.img}
                  alt="Libro del giorno"
                  className="w-50 h-25"
                />
              </div>

              <p className="lead mb-3">{random.title}</p>
              <Button className="btn btn-info text-white" onClick={warning}>
                Acquista a: {random.price}$
              </Button>
            </Col>
          </Row>
        </Container>
      </Collapse>
    </div>
  );
};

export default RandomBook;
