// import React from 'react'
// import { ProjectPreview } from '../components/ProjectPreview/ProjectPreview'

// export const Projects = () => {
//   return (
//     <>
//     <h1>Projects</h1>
//     <>
//     <ProjectPreview />
//     </>
    
//     </>
//   )
// }

// De Eric con clases de Tailwind
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Alerta } from '../components/Alert'
import { ProjectPreview } from '../components/ProjectPreview/ProjectPreview'
import { useProjects } from '../hooks/useProjects'
// import { ProjectPreview } from '../components/ProjectPreview'

export const Projects = () => {
  const {id} = useParams()
 
  const {loading, alert, projects, getProjects} = useProjects();

  useEffect(() => {
    getProjects(id)
  }, [])
  
  if(alert.msg) return <Alerta {...alert} />

  return (
    <>
    <h1
     className='text-4xl font-black'
    >
      Proyectos
    </h1>
    <div
     className='bg-white p-5 shadow mt-10 rounded-md'
    >
      {
        loading ? <p>Cargando</p> :
        projects.length
        ?
        projects.map(project => <ProjectPreview key={project._id} {...project}/>)
        :
        <p>No hay proyectos agregados</p>
        
      }
    </div>
    </>
  )
}