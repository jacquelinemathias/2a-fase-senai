import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Miau() {
    const navigate = useNavigate()
    function navegar(){
        let nome = prompt("username")
        if(nome == 'gillBates'){
            navigate('/final')
        }else{
            alert("Errou, última tentativa...")
        }
    }

  return (
    <div>
        <Navbar />
        <h1>Miau</h1>
        <button onClick={navegar}>Navegar para final</button>
    </div>
  )
}

export default Miau