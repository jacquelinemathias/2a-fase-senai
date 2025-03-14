import './AnoBissexto.css'
import { useState } from 'react'

function AnoBissexto() {

    const[resultado, setResultado] = useState('Resultado não calculado')

    function lerAno(){
        let ano = Number(prompt("Digite o ano:"))
        if(ano%4==0){
            setResultado("O ano é bissexto.")
        }else{
            setResultado("O ano não é bissexto.")
        }
    }

  return (
    <div className='container-anoBissexto'>
        <h2>Ano Bissexto</h2>

        <button onClick={lerAno}>Informar Ano</button>
        <p>
            {resultado}
        </p>
    </div>
  )
}

export default AnoBissexto