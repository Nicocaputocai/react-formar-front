import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const AuthLayout = () => {
  const {auth, loading} = useAuth()
  if(loading){
    return <p>Cargando</p>
  }
  return (
    <>
    {/* {
      !auth._id ? ( */}
    
      <main className='text-center'>
        <>
          <Outlet />
        </>
      </main>
      {/* ): <Navigate  to={"projects"}/>
} */}
    </>

  )
}
