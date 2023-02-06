import React from 'react'
import { Button, Container } from 'react-bootstrap'

export const Task = () => {
    return (
        <>
            <Container>
                <>
                    <p>Nombre de la tarea</p>
                    <p>Descripción de la tarea</p>
                    <p>Fecha de entrega</p>
                    <p>Prioridad</p>
                </>
                <>
                    <Button
                    /* onClick={} */
                    >
                        Editar
                    </Button>

                    <Button>
                        Completa/Incompleta
                    </Button>

                    <Button
                    /* onClick={} */
                    >
                        Eliminar
                    </Button>
                </>
            </Container>
        </>
    )
}
