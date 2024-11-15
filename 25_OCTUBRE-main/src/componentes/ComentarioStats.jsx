import {React, useContext, useState} from 'react'
import ComentariosContexto from '../contexto/ComentariosContexto';


const ComentarioStats = (  ) => {

  const {comments} = useContext(ComentariosContexto)
  const comentarios = comments

  console.log(comments)


  // El número de comentarios que hay en el arreglo de comentarios
 // const numeroComentarios = comentarios.length;




  return (
    <div className='feedback-stats'>
      <h4>Comentarios: {comments.length}</h4>
      <h4>Calificación Promedio: {4}</h4>
    </div>
  );
}


export default ComentarioStats

