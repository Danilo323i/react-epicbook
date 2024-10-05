import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { BookContext } from "../../context/BooksContext";

const BookDetails = () => {
  const { bookId } = useParams();
  const { books } = useContext(BookContext);
  const selectedBook = books.find((book) => book.asin === bookId);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(1);
  const [isEditing, setIsEditing] = useState(null);
  const [editCommentText, setEditCommentText] = useState("");
  const [editRating, setEditRating] = useState(1);

  const API_KEY = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzAxODliMjBmMzg1MDAwMTUxYzE3YzAiLCJpYXQiOjE3MjgxNTQwMzQsImV4cCI6MTcyOTM2MzYzNH0.JIRiJoizYe7DCSr8cnvlZXqrAWWfDqFT2Oq_BsDue7g`;

  const getComments = async () => {
    const url = `https://striveschool-api.herokuapp.com/api/books/${bookId}/comments/`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: API_KEY,
        },
      });
      if (response.ok) {
        const result = await response.json();
        setComments(result); // Imposta i commenti nel tuo stato
      } else {
        console.error("Errore nel recupero dei commenti:", response.status);
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  // Funzione per aggiungere un nuovo commento
  const postComment = async () => {
    const url = `https://striveschool-api.herokuapp.com/api/comments/${bookId}`;
    const commentData = {
      comment: newComment,
      rate: rating,
      elementId: bookId, // Associa il commento al libro specifico
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: API_KEY,
        },
        body: JSON.stringify(commentData),
      });

      if (response.ok) {
        getComments();
        setNewComment(""); // Resetta il campo di input del nuovo commento
        setRating(1); // Resetta il rating
      } else {
        console.error("Errore nell'invio del commento:", response.status);
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  // Funzione per modificare un commento esistente
  const updateComment = async (commentId) => {
    const url = `https://striveschool-api.herokuapp.com/api/comments/${commentId}`;
    const updatedCommentData = {
      comment: editCommentText,
      rate: editRating,
    };

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: API_KEY,
        },
        body: JSON.stringify(updatedCommentData),
      });

      if (response.ok) {
        console.log("Commento modificato");
        setIsEditing(null);
        getComments(); // Ricarica i commenti
      } else {
        console.error("Errore nella modifica del commento:", response.status);
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  // Funzione per eliminare un commento
  const deleteComment = async (commentId) => {
    const url = `https://striveschool-api.herokuapp.com/api/comments/${commentId}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: API_KEY,
        },
      });

      if (response.ok) {
        console.log("Commento eliminato");
        getComments(); // Ricarica i commenti dopo l'eliminazione
      } else {
        console.error(
          "Errore nell'eliminazione del commento:",
          response.status
        );
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  useEffect(() => {
    if (bookId) {
      getComments();
    }
  }, [bookId]);

  // Se il libro non è stato trovato nel contesto
  if (!selectedBook) {
    return <p>Nessun libro trovato con questo ID</p>;
  }

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center mt-4">
          <Col sm={12} md={6} lg={5}>
            <Card className="book-card shadow-sm">
              <Card.Img
                variant="top"
                src={selectedBook.img}
                className="book-img"
              />
              <Card.Body>
                <Card.Title className="book-title">
                  {selectedBook.title}
                </Card.Title>
                <Card.Text>
                  <strong>Categoria:</strong> {selectedBook.category}
                </Card.Text>
                <Card.Text>
                  <strong>Prezzo:</strong> {selectedBook.price}€
                </Card.Text>
                <Card.Text>{selectedBook.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={4}>
            <Card className="comments-card shadow-sm">
              <Card.Body>
                <h5 className="comments-title">Commenti</h5>
                <div className="comments-section">
                  {comments.length > 0 ? (
                    comments.map((comment) => (
                      <div key={comment._id} className="comment">
                        {isEditing === comment._id ? (
                          <>
                            <Form.Control
                              as="textarea"
                              value={editCommentText}
                              onChange={(e) =>
                                setEditCommentText(e.target.value)
                              }
                            />
                            <Form.Control
                              as="select"
                              value={editRating}
                              onChange={(e) => setEditRating(e.target.value)}
                            >
                              {[1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>
                                  {num} stelle
                                </option>
                              ))}
                            </Form.Control>
                            <Button onClick={() => updateComment(comment._id)}>
                              Salva
                            </Button>
                            <Button
                              variant="secondary"
                              onClick={() => setIsEditing(null)}
                            >
                              Cancella
                            </Button>
                          </>
                        ) : (
                          <>
                            <p>{comment.comment}</p>
                            <strong>Valutazione:</strong> {comment.rate}
                            <Button
                              variant="link"
                              onClick={() => {
                                setIsEditing(comment._id);
                                setEditCommentText(comment.comment);
                                setEditRating(comment.rate);
                              }}
                            >
                              Modifica
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => deleteComment(comment._id)}
                            >
                              Elimina
                            </Button>
                          </>
                        )}
                      </div>
                    ))
                  ) : (
                    <p>Nessun commento disponibile</p>
                  )}
                </div>

                <h5>Aggiungi un commento</h5>
                <Form.Control
                  as="textarea"
                  placeholder="Scrivi il tuo commento qui"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <Form.Control
                  as="select"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} stelle
                    </option>
                  ))}
                </Form.Control>
                <Button onClick={postComment}>Invia</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookDetails;
