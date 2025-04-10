import './App.css'
import { useState } from 'react'
import Oracaodev from './components/Oracaodev'
import Oracaofront from './components/Oracaofront'
import Oracaoback from './components/Oracaoback'
import Oracaodeploy from './components/Oracaodeploy'
import Oracaoprogramador from './components/Oracaoprogramador'

function App() {
  const [oracao, setOracao] = useState('')

  function botaoProgramador(){
    if(oracao == ''){
      setOracao(<Oracaoprogramador/>)
    }else{
      setOracao('')
    }
  }

  function botaoFront(){
    if(oracao == ''){
      setOracao(<Oracaofront/>)
    }else{
      setOracao('')
    }
  }

  function botaoDev(){
    if(oracao == ''){
      setOracao(<Oracaodev/>)
    }else{
      setOracao('')
    }
  }

  function botaoDeploy(){
    if(oracao == ''){
      setOracao(<Oracaodeploy/>)
    }else{
      setOracao('')
    }
  }

  function botaoBack(){
    if(oracao == ''){
      setOracao(<Oracaoback/>)
    }else{
      setOracao('')
    }
  }

  return (
    <>
    <div className='container-geral'>
      <div className='container-botao'>
        <button onClick={botaoProgramador} className='botaoProgramador'>Oração do Programador</button>
        <button onClick={botaoFront} className='botaoFront'>Oração do Frontend</button>
        <button onClick={botaoDev} className='botaoDev'>Oração do Desenvolvedor Web</button>
        <button onClick={botaoDeploy} className='botaoDeploy'>Oração do Deploy</button>
        <button onClick={botaoBack} className='botaoBack'>Oração do Backend</button>
      </div>
      <div className='texto-oracao'>{oracao}</div>

      {/* <Oracaofront/>
      <Oracaoback/>
      <Oracaodeploy/>
      <Oracaoprogramador/> */}
    </div>
    </>
  )
}

export default App