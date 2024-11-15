import {React, useState, usuState, selected} from 'react'

function ComentarioCalificacion ({select}) {

    const [selected, setSelected]
            = useState(10)
    //Funcion para clik en radio button
    const handleChange = (e)=>{
        setSelected( +e.currentTarget.value)
        select (+e.currentTarget.value)
    }    

  return (
    <ul className='rating'>
        <li key="1">
            <input 
                type="radio"
                id='mun1'
                name='calificacion'
                onChange={handleChange}
                checked = {selected === 1}
                value="1" />

            <label htmlFor="mun1">1</label>    

        </li>

        <li key="2">
            <input 
                type="radio"
                id='mun2'
                name='calificacion'
                onChange={handleChange}
                checked = {selected === 2}
                value="2" />

            <label htmlFor="mun2">2</label>    

        </li>

        <li key="3">
            <input 
                type="radio"
                id='mun3'
                name='calificacion'
                onChange={handleChange}
                checked = {selected === 3}
                value="3" />

            <label htmlFor="mun3">3</label>    

        </li>

        <li key="4">
            <input 
                type="radio"
                id='mun4'
                name='calificacion'
                onChange={handleChange}
                checked = {selected === 4}
                value="4" />

            <label htmlFor="mun4">4</label>    

        </li>
        <li key="5">
            <input 
                type="radio"
                id='mun5'
                name='calificacion'
                onChange={handleChange}
                checked = {selected === 5}
                value="5" />

            <label htmlFor="mun5">5</label>    

        </li>
        <li key="6">
            <input 
                type="radio"
                id='mun6'
                name='calificacion'
                onChange={handleChange}
                checked = {selected === 6}
                value="6" />

            <label htmlFor="mun6">6</label>    

        </li>
        <li key="7">
            <input 
                type="radio"
                id='mun7'
                name='calificacion'
                onChange={handleChange}
                checked = {selected === 7}
                value="7" />

            <label htmlFor="mun7">7</label>    

        </li>
        <li key="8">
            <input 
                type="radio"
                id='mun8'
                name='calificacion'
                onChange={handleChange}
                checked = {selected === 8}
                value="8" />

            <label htmlFor="mun8">8</label>    

        </li>
        <li key="9">
            <input 
                type="radio"
                id='mun9'
                name='calificacion'
                onChange={handleChange}
                checked = {selected === 9}
                value="9" />

            <label htmlFor="mun9">9</label>    

        </li>
        <li key="10">
            <input 
                type="radio"
                id='mun10'
                name='calificacion'
                onChange={handleChange}
                checked = {selected === 10}
                value="10" />

            <label htmlFor="mun10">10</label>    

        </li>

    </ul>
  )
}

export default ComentarioCalificacion