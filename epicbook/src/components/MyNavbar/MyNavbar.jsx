import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

 const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-dark MyNav">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;