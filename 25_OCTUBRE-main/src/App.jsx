import { React} from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './componentes/Header';
import ComentarioStats from './componentes/ComentarioStats';
import Abaut from './paginas/Abaut';
import HomeIconLink from './componentes/HomeIconLink';
import { ComentariosProvider } from './contexto/ComentariosContexto';
import ComentarioLista from './componentes/ComentarioLista';

function App() {
    
    const titulo = "App de Comentarios";
    const Autor = "Porther Lopez";
    const ficha = "2902093";
    const formacion = "Centro de formación SENA";

    const loading = false; // Set this to true if fetching data
    if (loading) return (<h1>Cargando comentarios...</h1>);

    
  



    return (
     
        <ComentariosProvider>
            <Router>
                <div className='container'>
                    <Header titulo={titulo} autor={Autor} ficha={ficha} formacion={formacion} />
                    <Routes>
                        <Route exact path='/' element={
                            <>
                            <ComentarioStats />
                         
                           
                            </>
                        }></Route>
                        <Route path='/abaut' element={
                            <>
                            <Abaut titulo={titulo} autor={Autor} ficha={ficha}/>
                            <HomeIconLink/>
                            </> 
                            
                    
                        }></Route>
                        
                    </Routes>
        
                </div>

            </Router>

        </ComentariosProvider>

        
        
    );
}

export default App;
