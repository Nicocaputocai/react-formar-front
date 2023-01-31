import { Form } from "react-bootstrap"

export const RecoverPassword = () => {
  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña nueva</Form.Label>
            <Form.Control type="password" placeholder="Password" id="password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Repetí tu nueva contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" id="password2"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Cambiar contraseña
            </Button>
        </Form>
    </>
  )
}
