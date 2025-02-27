import { useState } from 'react'
import './Conversao2.css'

function Conversao2() {
  const [km, setKm] = useState(0)
  const [milha, setMilha] = useState(0)
  const [legua, setLegua] = useState(0)

  function converterKmParaMilha(){
    let entrada = Number(prompt("Km: "))
    setMilha((entrada * 0.6214).toFixed(2))
    setKm(entrada)
    setLegua((entrada * 0.207).toFixed(2))
  }

  return (
    <div className="container-conversao2">
      <h2>Km para Milha</h2>
      <button onClick={converterKmParaMilha}>Converter</button>

      <p>
        Valor original: {km} Km
      </p>
      <p>
        Valor convertido: {milha} milhas
      </p>
      <p>
        Valor convertido: {legua} léguas
      </p>
    </div>
  )
}

export default Conversao2