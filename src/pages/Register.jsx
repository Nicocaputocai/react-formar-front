import { useState } from "react"
import { Button, Form, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { Alerta } from "../components/Alert"
import { clientAxios } from "../config/clientAxios"
import Swal from "sweetalert2"

const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;

export const Register = () => {

const [alert, setAlert] = useState({});
const [sending, setSending] = useState(false)

const {handleInputChange,formValues,reset} = useForm({
  name:"",
  email:"",
  password: "",
  password2: ""
});

const {name, email, password, password2} = formValues;

const handleSubmit =  async (e) =>{
e.preventDefault()
// console.log(formValues);
if([name, email, password, password2].includes("")){
  handleShowAlert('Todos los campos son obligatorios')
  return null
}
if(!exRegEmail.test(email)){
  handleShowAlert('El email tiene un formato inválido')
  return null
}

if(password !== password2){
  handleShowAlert('Las contraselas deben ser iguales')
  return null
}
try {
  setSending(true)
  const {data} = await clientAxios.post('/auth/register',{
    name,
    email,
    password
  });
  setSending(false)
  console.log(data.msg);
  Swal.fire({
    title: 'Gracias por registrarte',
    text: 'Registro exitoso',
    icon: 'info',
    confirmButtonText: 'Cool'
  })
  reset()
  
} catch (error) {
  console.error(error)
  handleShowAlert(error.response.data.msg)
}
};
const handleShowAlert = (msg) => {
  setAlert({
    msg
  });

  setTimeout(() => {
    setAlert({});
  }, 3000);
}
  return (
    <>
    <h1>Registrate</h1>
    {alert.msg && <Alerta{...alert}/>}
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type="text" 
        placeholder="Ingresá tu nombre y apellido" 
        id="name" 
        value={name} 
        name="name" 
        onChange={handleInputChange} 
        autoComplete='off'/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"
         placeholder="Ingresa tu email" 
         id="email"
         value={email}
         name="email"
         onChange={handleInputChange} 
         />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        placeholder="Password" 
        id="password"
        value={password}
        name="password"
        onChange={handleInputChange} 
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        placeholder="Password2" 
        id="password2"
        value={password2}
        name="password2"
        onChange={handleInputChange} 
        />
      </Form.Group>
      <Button variant="primary" 
      type="submit"
      disabled = {sending}
      >
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
