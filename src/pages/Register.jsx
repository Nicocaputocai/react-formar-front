import { Button, Form, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


export const Register = () => {
  return (
    <>
    <h2>Registrate</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingresá tu nombre y apellido" id="name" autoComplete='off'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email" id="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword2">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password2" id="password2"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Crear cuenta
      </Button>
    </Form>
    <Nav>
        <Nav.Item as={Link} to="/">
            ¿Estás registrado? Iniciá sesión 
        </Nav.Item>
    </Nav>
    </>
  )
}
