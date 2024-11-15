import React from 'react'
import ComentarioItem from './ComentarioItem'

const Header = ({autor , titulo, ficha, formacion}) => {
const headerStyles = {
    color: '#8c96ff'
}

const color1 = {
    color: '#fd5050'
}

const color2 = {
    color: '#e250fd'
}

const color3 = {
    color: '#50fdc6'
}

  return (
    <header style={headerStyles}>
        <div className='container'>
            {titulo}
            <p style={color1}>Autor: {autor}</p>
            <p style={color2}>Ficha: {ficha} </p>
            <p style={color3}>Autor: {formacion}</p>

        </div>

    </header>
    
  )
}

export default Header