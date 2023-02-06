import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'

export const FormProject = () => {
    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="name">name</Form.Label>
                        <Form.Control 
                            id="name"
                            type="text"
                            placeholder="Nombre del proyecto" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="description">Descripción</Form.Label>
                        <Form.Control 
                        id="description"
                        type="text"
                        style={{ resize: "none" }}
                        placeholder="Descripción del proyecto" 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="date-expire">Fecha de entrega</Form.Label>
                        <Form.Control 
                        id="date-expire"
                        type="date"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="client">Nombre Cliente</Form.Label>
                        <Form.Control 
                        id="client"
                        type="text"
                        placeholder="Nombre del cliente"
                        />
                    </Form.Group>

                    <Button variant="primary" >
                    actualizar/guardar
                    </Button>
                </Form>
            </Container>
        </>
    )
}
