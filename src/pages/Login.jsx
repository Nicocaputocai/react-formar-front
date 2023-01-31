import React from 'react'
import { Button, Form, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <>
    <h2>Iniciar sesión</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email" id='email'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" id='password'/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
    <Nav>
      <Nav.Item as={Link} to='/register'> ¿No tenés cuenta? Registrate!
          {/* <Nav.Link href="/home">Active</Nav.Link> */}
        </Nav.Item>

        <Nav.Item as={Link} to='/forget-password'> Olvidé mi contraseña
          {/* <Nav.Link href="/home">Active</Nav.Link> */}
        </Nav.Item>
    </Nav>
    </>
  )
}
