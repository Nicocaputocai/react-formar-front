import { Navigate, Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Sidebar } from '../components/Sidebar/Sidebar'
import useAuth from '../hooks/useAuth'


export const ProtectedLayout = () => {
  const { auth, loading } = useAuth()
  // console.log(auth)
  
    if (loading) {
      return (<p>Cargando</p>)
    }
  
  return (
    <>

      {
        auth._id ? (
          <>
          <Header />
          <>
          <Sidebar />
            <main className='text-center'>
              Proyectos
              <Outlet />
            </main>
            </>
          </>

        ) :( 
        <Navigate to="/" />
        )}
    </>
  )
}
