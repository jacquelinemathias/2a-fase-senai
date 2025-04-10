import { useState } from 'react'
import './Oracaodev.css'

function App() {
  const [oracao, setOracao] = useState(false)

  return (
    <div className="container-oracaoDev largura">
      <p className='textoDev'>
        Divino Stack Overflow, que estais na nuvem, <br />

        Santificado seja o nosso deploy. <br />

        Venha a nós o CSS alinhado, <br />

        Seja feita a responsividade, <br />

        Assim no Chrome como no Firefox. <br />

        O código nosso de cada dia nos dai hoje, <br />

        Perdoai os nossos console.log, <br />

        Assim como nós perdoamos os commits sem mensagem. <br />

        Não nos deixei cair em callback hell, <br />

        Mas livrai-nos dos bugs de produção. <br />

        Amém, amém, git commit -m "Aleluia". <br />
      </p>
    </div>
  )
}

export default App