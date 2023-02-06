import React from 'react'
import {Nav, Container,Button} from "react-bootstrap"
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
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Item as={Link} href="#action1">Proyectos</Nav.Item>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                
                                <Nav.Link href="#" disabled>
                                    Link
                                </Nav.Link>
                                <Button 
                                type="button"
                                /* onClick={closeSession} */>
                                </Button>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </>
    )
}
