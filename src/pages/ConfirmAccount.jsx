import {useEffect, useState} from 'react'
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Alerta } from '../components/Alert';
import { clientAxios } from '../config/clientAxios';
import Swal from "sweetalert2"

export const ConfirmAccount = () => {

  const params = useParams();

  const {token} = params
  const navigate= useNavigate();
  const [alert, setAlert] = useState({})

  const handleShowAlert = (msg) => {
    setAlert({
      msg
    });
  
    setTimeout(() => {
      setAlert({});
    }, 10000);
  }

  useEffect(() => {
    const confirmAccount = async() =>{
      try {
        const {data } = await clientAxios.get(`/auth/checked?token=${token}`)
        Swal.fire({
          title: 'Cuenta validada',
          text: data.msg,
          icon: 'info',
          allowOutsideClick: false,
          confirmButtonText:"Iniciar sesión"
        })
        .then(result =>{
          if(result.isConfirmed){
            navigate('/')
          }
            
        })
      } catch (error) {
        console.log(error);
        handleShowAlert(error.response?.data.msg)
      }
    }
    confirmAccount()
  }, [])
  


  return (
    <> 
        <h1> 
            Confirma tu cuenta 
        </h1> 
        <div> 
          {
            alert.msg &&(
              <>
              <Alerta {...alert}/>
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
              </>
            )
          }

        </div> 
 
    </> 
  )
}
