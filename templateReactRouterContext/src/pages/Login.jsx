import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'

function Login() {
    const[inputUsername, setInputUsername] = useState('')
    const[inputSenha, setInputSenha] = useState('')
    const{usuarios} = useContext(GlobalContext)

  return (
    <div>
        <Navbar />
        <h1>Login</h1>
        <div>
            username <input type="text"
            value = {inputUsername}
            onChange = {(e) => setInputUsername(e.target.value)}
            />
        </div>
        <div>
            senha <input type="password"
            value = {inputSenha}
            onChange = {(e) => setInputSenha(e.target.value)}
            />
        </div>
        <button>Login</button>
    </div>
  )
}

export default Login
