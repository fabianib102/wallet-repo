import { FC } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'

type NavHeaderProps = {};

const NavHeader: FC<NavHeaderProps> = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavHeader;