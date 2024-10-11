import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Navbar className="mb-5" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          CMS
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/admin">
            Admin
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
