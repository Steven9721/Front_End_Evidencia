import React from 'react'
import Card from '../componentes/Card'

const Abaut = ({titulo,Autor,ficha}) => {
  return (
    <Card>
        <div className='about'>
            <h1>Acerca de este proyecto</h1>
            <p><b>titulo:</b>{titulo}</p>
            <p><b>Autor:</b>{Autor}</p>
            <p><b>Ficha:</b>{ficha}</p>
            <p>
                <a href="/">Volver a pagina principal</a>
            </p>

        </div>
    </Card>
  )
}

export default Abaut