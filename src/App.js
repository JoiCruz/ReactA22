

import  React  from  'react' //para usar como tags html, jsx
import  './index.css'
import  Primeiro  from './componentes/Primeiro'
import  ComParametro  from './componentes/basicos/ComParametro'
import  Fragmento  from './componentes/basicos/Fragmentos'
import NumeroAle from './componentes/basicos/NumeroAle'
import Modelo from './componentes/Modelo'
import './App.css'
import Nome from './componentes/basicos/Nome'
import Formulario from './componentes/basicos/Formulario'

export default function App(props){
    return(
        <div className='app'>
        
            <h1>Fundamentos do React</h1>
              
            <div className='cards'>
                
        <Modelo titulo='Formulário' color="#A65665"><Formulario/></Modelo>
        
        <Modelo titulo= 'useState' color="#59051C"> <Nome/> </Modelo>
        
       
        <Modelo titulo= "Primeiro Componente" color="#F2D8CE"> <Primeiro/> </Modelo>

        <Modelo titulo= "Utilizando Parâmetro" color="#D9958F"> <ComParametro  titulo = "Frio em Sp"  subtitulo = "Neve"/> </Modelo>

            <Modelo titulo= "Utilizando Parâmetro" color="#0D0D0D"> <ComParametro  titulo = "Calor no Rio de Janeiro" subtitulo = "Chuva de verão"/> </Modelo>

            <Modelo titulo= "Utilizando Parâmetro" color="#ff00ff"> <ComParametro  titulo = "Iniciar A22"  subtitulo = "lindos"/> </Modelo>

            <Modelo titulo="Uilizando Fragmento" color="#F26D9E"> <Fragmento/> </Modelo>
            <Modelo titulo="Numeros Aleatório" color="#DB1A7E"> <NumeroAle min={100} max={1000}/> </Modelo>

            
            </div>


        </div>
        
       
        
    )
}