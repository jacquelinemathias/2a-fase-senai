import { useState } from 'react'
import './Oracaoback.css'

function App() {
  const [oracao, setOracao] = useState(false)

  return (
    <div className="container-oracaoBack largura">
      <p className='textoBack'>
        Nosso código que está no servidor, <br />

        Santificado seja o teu endpoint, <br />

        Venha a nós o teu JSON, <br />

        Seja feita tua lógica, <br />

        Assim na API como no banco. <br />

        O token nosso de cada dia nos dai hoje, <br />

        Perdoai nossas queries mal otimizadas, <br />

        Assim como nós perdoamos quem nos envia POST sem body. <br />

        E não nos deixes cair em loops infinitos, <br />

        Mas livrai-nos do downtime. <br />

        Amém, amém, status 200. <br />
      </p>
    </div>
  )
}

export default App