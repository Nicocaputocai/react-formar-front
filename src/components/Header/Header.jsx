
import {Nav, Container,Button, Navbar, Form, NavItem} from "react-bootstrap"
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Projects Manager</Navbar.Brand>
                        <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button className="m-2" variant="outline-success">Search</Button>
                            </Form>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Button className="m-2">
                                Proyectos
                                <NavItem as={Link} to="/projects"></NavItem>
                                </Button>
                                <Button  className="m-2"
                                type="button"
                                /* onClick={closeSession} */>
                                    Cerrar sesión
                                </Button>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </>
    )
}