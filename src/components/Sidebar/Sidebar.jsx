import React from 'react'
import {Button} from 'react-bootstrap'

export const Sidebar = () => {
    return (
        <aside>
            <p>Hola: Nombre de usuario</p>
            <Button><Link to="create-project">Nuevo proyecto</Link></Button>
        </aside>
    )
}
