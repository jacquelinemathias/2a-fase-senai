import {useState} from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("Bolsonaro")
  let nome = "Ulib"

  function lerNome(){
    nome = prompt("Digite o nome:")
    console.log(nome);
  }

  function lerUsuario(){
    let resposta = prompt("Digite o novo usuário:")
    setUsuario(resposta)
  }

  return (
    <>
      <h1>Estados</h1>
      Nome: {nome}
      <div>
        Usuário: {usuario}
      </div>
      <button onClick={lerNome}>Trocar nome</button>
      <button onClick={lerUsuario}>Trocar usuário</button>
    </>
  )
}

export default App
