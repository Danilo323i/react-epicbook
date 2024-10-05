import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const BookCard = ({
  id,
  price,
  category,
  title,
  img,
  isSelected,
  onSelect,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/books/${id}`);
  };

  return (
    <Col sm={12} md={4} lg={3} className="mt-5">
      <Card
        className={`h-100 m-2 ${isSelected ? "bg-danger text-white" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={onSelect}
      >
        <Card.Img
          variant="top"
          className="h-100 w-100 object-fit-cover"
          src={img}
        />
        <Card.Body>
          <Card.Title>{category}</Card.Title>
          <Card.Text className="text-truncate">{title}</Card.Text>
          <Card.Text>{price} €</Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              variant="primary"
              className="m-auto"
              onClick={handleNavigate}
            >
              Dettagli
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
