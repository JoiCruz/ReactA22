 import React from 'react'

 export default ()=> {

    const min = 10
    const max = 20


    const sorteado = parseInt(Math.random() * (max-min)) + min; // Gerar numeros aleatórios

    return(
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor mínimo</strong>{min}</p>
            <p><strong>Valor máximo:</strong>{max}  </p>
            <p><strong>Valor sorteado: </strong> {sorteado} </p> 
        </div>
    )
 }