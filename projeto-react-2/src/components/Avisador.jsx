import {useState} from 'react'
import './Avisador.css'

function Avisador() {
  const [avisar, setAvisar] = useState(false)

  function toggleAviso(){
    setAvisar(!avisar)
  }
  return (
    <div className="container-avisador">
      {avisar && <p>
        Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.
        </p>}
        <button onClick={toggleAviso}>Aviso!</button>
    </div>
  )
}

export default Avisador