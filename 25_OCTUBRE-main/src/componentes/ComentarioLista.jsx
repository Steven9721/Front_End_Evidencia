import {React, useContext} from 'react';
import ComentarioItem from './ComentarioItem'
import { AnimatePresence, motion } from 'framer-motion';
import ComentariosContexto from '../contexto/ComentariosContexto';

function ComentarioLista() {

    const { comments } = useContext(ComentariosContexto)
    
    
    if (comments.length === 0 || !comments){ 
        return <p> No hay comentarios </p>
    } else{
        return (
            <div className = "comments" >
                <AnimatePresence>    
                    <ul>
                        {
                            comments.map( comentario => 
                                <motion.div

                                    key = {comentario.id}
                                    initial = {{scale : 0}}
                                    animate = {{rotate : 0, scale : 1}}
                                    exit = {{opacity : 0, scale : 0}}
                                    transition={{
                                        type : "spring",
                                        stiffness: 260,
                                    }}
                                
                                > 
                          
                                    <ComentarioItem 
                                        key = {comentario.id}
                                        comentario = {comentario}
                                        
                                        
                                        
                                    />
                                </motion.div>    
                            )
                        }
                    </ul>
                </AnimatePresence>    
            </div>
          )
    }


}



  


export default ComentarioLista