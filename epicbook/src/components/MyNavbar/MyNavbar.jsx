import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SearchBook from '../SearchBook/SearchBook';

 const MyNavbar = () => {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
      {SearchBook}
    </Navbar>
  );
}

export default MyNavbar;