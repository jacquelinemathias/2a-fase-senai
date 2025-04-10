import { useState } from 'react'
import './Oracaodeploy.css'

function App() {
  const [oracao, setOracao] = useState(false)

  return (
    <div className="container-oracaoDeploy largura">
      <p className='textoDeploy'>
        Creio em um único ambiente, <br />

        Prod, todo-poderoso, <br />

        Criador do stress e da glória. <br />

        Creio no CI/CD, <br />

        Filho único do DevOps, <br />

        Que foi concebido pelo merge,<br />

        Nasceu da pipeline,<br />

        Sofreu sob erro 500,<br />

        Foi testado, caiu e voltou no rollback.<br />

        Subiu ao GitHub,<br />

        Está sentado ao lado do log de produção,<br />

        Donde há de vir julgar nosso push e nossos testes.<br />

        Creio no auto-scaling,<br />

        Na compressão de imagens,<br />

        Na minificação dos scripts,<br />

        Na ressurreição do build,<br />

        E na vida eterna do uptime.<br />

        Amém e F5.
      </p>
    </div>
  )
}

export default App