import {useState} from 'react'
import './App.css'
import Conversao from './components/Conversao'
import Conversao2 from './components/Conversao2'
import Avisador from './components/Avisador'

function App() {
  const [usuario, setUsuario] = useState("Bolsonaro")
  const [senha, setSenha] = useState()
  // let nome = "Ulib"
  const [nome, setNome] = useState("Ulib")

  function lerNome(){
    let nome = prompt("Digite o nome:")
    // console.log(nome);
    setNome(nome)
  }

  function lerUsuario(){
    let resposta = prompt("Digite o novo usuário:")
    setUsuario(resposta)

    let pw = prompt("Digite uma nova senha: ")
    let pw2 = prompt("Confirme a nova senha: ")
    if(pw==pw2){
      setSenha(pw)
    }else{
      alert("As senhas não correspondem.")
    }
  }

  return (
    <>
      <Conversao/>
      <Conversao2/>
      <Avisador/>

      <h1>Estados</h1>
      Nome: {nome}
      <div>
        Usuário: {usuario}
      </div>
      <div>
        Senha: {senha}
      </div>
      <button onClick={lerNome}>Trocar nome</button>
      <button onClick={lerUsuario}>Trocar usuário</button>
    </>
  )
}

export default App