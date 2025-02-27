import { useState } from 'react'
import './Conversao.css'

function Conversao() {
  const [real, setReal] = useState(0)
  const [dolar, setDolar] = useState(0)

  function converterRealParaDolar(){
    let entrada = Number(prompt("R$: "))
    setDolar((entrada * 0.1731).toFixed(2))
    setReal(entrada)
  }

  return (
    <div className="container-conversao">
      <h2>Real para Dólar</h2>
      <button onClick={converterRealParaDolar}>Converter</button>

      <p>
        Valor original: R${real}
      </p>
      <p>
        Valor convertido: U${dolar}
      </p>
    </div>
  )
}

export default Conversao