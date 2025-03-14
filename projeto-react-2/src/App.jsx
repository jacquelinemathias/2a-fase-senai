import {useState} from 'react'
import './App.css'
import Conversao from './components/Conversao'
import Conversao2 from './components/Conversao2'
import Avisador from './components/Avisador'
import Estados from './components/Estados'
import AnoBissexto from './components/AnoBissexto'

function App() {
  return (
    <>
      <AnoBissexto/>
      <Avisador/>
      <Conversao/>
      <Conversao2/>
      <Estados/>
    </>
  )
}

export default App