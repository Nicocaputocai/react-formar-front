import { Button, Form, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export const ForgotPassword = () => {
  return (
    <>
    <h2>Recuperá tu contraseña</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formEmail" >
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Ingresá tu  email" id="email"/>
            </Form.Group>
            <Button variant="primary" type="submit">
            Recuperar contraseña
            </Button>
        </Form>
        <Nav>
            <Nav.Item as={Link} to="/register">
                Registrate
            </Nav.Item>
            <Nav.Item as={Link} to="/">
                Iniciar sesión
            </Nav.Item>
        </Nav>
    </>
  )
}
