import { useState } from 'react'
import './App.css'

function App() {
  const [inputUsername, setInputUsername] = useState('')
  const [inputSenha, setInputSenha] = useState('')

  function efetuarLogin(){
    alert(inputUsername)
  }

  return (
    <div className='container-app'>
      <h1>Inputs controlados</h1>
      <label htmlFor="">Usuário</label>
      <input type="text" value={inputUsername} onChange={(event) => setInputUsername(event.target.value)}/>

      <label htmlFor="">Senha</label>
      <input type="text" value={inputSenha} onChange={(event) => setInputSenha(event.target.value)}/>

      {/* <div>{inputValor}</div> */}

      <div><button onClick={efetuarLogin}>Login</button></div>
    </div>
  )
}

export default App
