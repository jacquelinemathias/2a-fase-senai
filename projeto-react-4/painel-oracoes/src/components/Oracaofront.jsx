import { useState } from 'react'
import './Oracaofront.css'

function App() {
  const [oracao, setOracao] = useState(false)

  return (
    <div className="container-oracaoFront largura">
      <p className='textoFront'>
        Ave CSS, cheia de bugs, <br />

        O framework é convosco, <br />
            
        Bendita sois vós entre as telas, <br />
            
        E bendito é o fruto do vosso DOM: o pixel perfeito. <br />
            
        Santa Documentação, mãe da UI, <br />
            
        Rogai por nós, devs visuais, <br />
            
        Agora e na hora do push final. <br />
            
        Hover.
      </p>
    </div>
  )
}

export default App