import { useEffect, useState } from "react"
import { Button, Form, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Alerta } from '../components/Alert';
import { clientAxios } from "../config/clientAxios";
import Swal from "sweetalert2"

export const ForgotPassword = () => {
    const [alert,setAlert]=useState({})
    const [email,setEmail] = useState("")
    const [sending, setSending] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!email){
            handleShowAlert('El correo es obligatorio')
            return null
        }
        try {
            setSending(true)
           const {data } = await clientAxios.post('/auth/send-token',{
                email
            })
            setSending(false)
            Swal.fire({
                title: 'Revisa tu correo',
                text: data.msg,
                icon: 'info',
                confirmButtonText:"Entendido"
              })

              setEmail("")

        } catch (error) {
            console.log(error);
            handleShowAlert(error.response?.data.msg)
            setEmail("")
        }
    }
    const handleShowAlert = (msg) => {
        setAlert({
          msg
        });
      
        setTimeout(() => {
          setAlert({});
        }, 5000);
      }

  return (
    <>
    <h1>Recuperá tu contraseña</h1>
        {
          alert.msg && <Alerta {...alert} />
        }
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3"  >
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Ingresá tu  email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={sending}>
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
