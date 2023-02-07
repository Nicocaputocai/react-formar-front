import { useState } from 'react'
import { Button, Container, Form, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { Alerta } from '../components/Alert';
import { clientAxios } from '../config/clientAxios';
import useAuth from '../hooks/useAuth';
import { useForm } from '../hooks/useForm';

export const Login = () => {
  const [alert,setAlert] = useState({});
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  
  const handleShowAlert = (msg, time = true) => {
    setAlert({
      msg
    });
    if(time){
      setTimeout(() => {
        setAlert({});
      }, 3000);
    }
    reset()
  }
  const {formValues,handleInputChange,reset} = useForm({
    email:"",
    passwords: ""
  });
  const {email,password} = formValues

  const handleSubmit= async (e) =>{
    e.preventDefault();

    if ([email, password].includes("")) {
      handleShowAlert("Todos los campos son obligatorios");
      return null;
    }

    try {
     const {data} = await clientAxios.post('/auth/login',{
        email,
        password
      })
      // console.log(data);
      setAuth(data.user)
      sessionStorage.setItem('token', data.token) //Cuando cierro el navegador se borra. Para que no se borre va en localStorage
      navigate('/projects')

    } catch (error) {
      console.log(error);
      handleShowAlert(error.response?.data.msg)
    }
    
  }

  return (
    <>
    <Container>
    <h2>Iniciar sesión</h2>
    {
      alert.msg && <Alerta  {...alert} />
    }
    <Form bg="light" expand="lg" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email" id='email' name="email" value={email} onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" id='password' name="password" value={password} onChange={handleInputChange}/>
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
    </Container>
    </>
  )
}
