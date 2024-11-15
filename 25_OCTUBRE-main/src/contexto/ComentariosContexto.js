import { createContext, useEffect, useState } from "react";

//Crear contexto
 
const ComentariosContexto = createContext ()

// Crear provider: para que el contexto
//se reconozca en todo el componente

export const ComentariosProvider = ({children})=>{

    const [comments, setComments] = useState()


    const fetchComentarios = async() => {
        const response = await fetch('http://localhost:5000/comentarios')
        const comentariosAPI = await response.json()
        setComments(comentariosAPI)
    }

    useEffect(()=>{
        fetchComentarios()
    }, [])

    //FUNCION PARA TRAER LOS COMENTARIOS DESDE JSON-SERVER
 

    const borrarItem = (id) => {
        if (window.confirm("¿Está seguro de borrar el comentario?")) {
            setComments(comments.filter((c) => c.id !== id));
        }
    };

    return <ComentariosContexto.Provider value={{comments, setComments, borrarItem}}>
        {children}
    </ComentariosContexto.Provider>
}

export default ComentariosContexto