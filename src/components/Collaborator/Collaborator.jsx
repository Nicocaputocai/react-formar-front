// import { Button, Container } from 'react-bootstrap'

// export const Collaborator = () => {
//     return (
//         <>
//             <Container>
//                 <p>
//                     Nombre de colaborador
//                     <span>|Email</span>
//                 </p>
//                 <Button /* onClick={handleDelete} */>
//                     Eliminar
//                 </Button>
//             </Container>
//         </>
//     )
// }

//de Eric

import React from "react";

export const Collaborator = () => {
  return (
    <div  className="bg-white border shadow-md rounded p-5 justify-between flex items-center">
    <p className="font-bold uppercase">
      Nombre del colaborador
      <span className="text-gray-600 lowercase">
        | EMAIL
      </span>{" "}
    </p>
    <div>
  
          <button 
          className='bg-red-600 p-2 text-white uppercase font-bold text-sm rounded-lg'
       
          >
              Eliminar
          </button>
     
   
    </div>
  </div>
  );
};