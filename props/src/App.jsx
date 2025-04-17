import { useState } from 'react'
import './App.css'
import Produto from './components/Produto'

function App() {
  const[produtos, setProdutos] = useState([
    {
    
    }, {

    }
  ])
  
  function testar(){
    console.log(produtos);
  }

  return (
    <div className='container-app'>
      <Produto modelo={"Galaxy A15"} preco={809}/>
      <Produto modelo={`SmartTV 32" Full HD LED TCL`} preco={971.10}/>

      <button onClick={testar}>Testar</button>
    </div>
  )
}

export default App