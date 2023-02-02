import { useEffect, useState } from "react"
import { Button, Form, FormCheck, Nav, NavItem } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2";
import { Alerta } from "../components/Alert";
import { clientAxios } from "../config/clientAxios";


export const RecoverPassword = () => {
  const [alert, setAlert] =useState({});
  const [password, setPassword] =useState({});
  const [tokenChecked, setTokenChecked] =useState(false);
  const {token}= useParams();
  const navigate = useNavigate();

  const handleShowAlert = (msg) => {
    setAlert({
      msg
    });
  }

  useEffect(() => {
    const checkToken = async()=>{
      try {
        const {data} = await clientAxios.get(`/auth/reset-password?token=${token}`)
        console.log(data.msg);
        setTokenChecked(true)

      } catch (error) {
        console.log(error);
        handleShowAlert(error.response?.data.msg)
      }
    }
    checkToken()
  }, [])
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const {data} = await clientAxios.post(`/auth/reset-password?token=${token}`,{
        password
      });
  
      Swal.fire({
        icon: 'info',
        title: 'Contraseña reseteada!',
        text: data.msg,
        confirmButtonText : "Iniciá sesión",
        allowOutsideClick : false
      }).then(result => {
        if(result.isConfirmed){
          setPassword("");
          navigate('/')
        }
      }) 
    } catch (error) {
      console.error(error)
      handleShowAlert(error.response?.data.msg)
      setPassword("");

    }
    
  }
  return (

    <>
    <h1>Cambiar contraseña</h1>
              {alert.msg && <Alerta {...alert}/>}
              {tokenChecked ? 
                  <Form onSubmit={handleSubmit}>

          
                  <Form.Group className="mb-3" >
                  <Form.Label>Contraseña nueva</Form.Label>
                  <Form.Control type="password" placeholder="Password" id="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                      Cambiar contraseña
                  </Button>
              </Form>
                :        
                <Nav>
                <NavItem
                as={Link} to={"/register"}
               >
                 ¿No tenés una cuenta? Registrate
               </NavItem>
               <NavItem
                as={Link}  to={"/"}
               >
                 ¿Estás registrado? Iniciá sesión
               </NavItem>
             </Nav>

              
                  }
    </>
  )
}
