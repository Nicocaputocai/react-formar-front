import { Button, Container } from 'react-bootstrap'

export const Collaborator = () => {
    return (
        <>
            <Container>
                <p>
                    Nombre de colaborador
                    <span>|Email</span>
                </p>
                <Button /* onClick={handleDelete} */>
                    Eliminar
                </Button>
            </Container>
        </>
    )
}
