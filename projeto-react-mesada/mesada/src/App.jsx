import { useState } from 'react'
import './App.css'

function App() {
  const [saldo, setSaldo] = useState(0)
  const [valor, setValor] = useState('')
  const [nomeMovimentacao, setNomeMovimentacao] = useState('')
  const [movimentacoes, setMovimentacoes] = useState([])

  function registrarMovimentacao(tipo) {
    const numero = parseFloat(valor)
    if (!isNaN(numero) && nomeMovimentacao.trim() !== '') {
      const novaMovimentacao = {
        nome: nomeMovimentacao,
        valor: numero,
        tipo: tipo
      }

      setMovimentacoes([...movimentacoes, novaMovimentacao])

      if (tipo === 'Crédito') {
        setSaldo(saldo + numero)
      } else {
        setSaldo(saldo - numero)
      }

      setValor('')
      setNomeMovimentacao('')
    }
  }

  return (
    <div className='container'>
      <div className='espaco-imenso'>
        <div className="titulo">
          <label>iMesada</label>
        </div>
        <div className="sub-tit">
          <label>🦄 Controlinho Financeiro 🦄</label>
        </div>
      </div>
      <div className="saldo">
        <label>Saldo: R$ {saldo.toFixed(2)}</label>
      </div>
      <div>
        <input className='input1'
          type="text"
          placeholder='Nome da movimentação'
          value={nomeMovimentacao}
          onChange={(e) => setNomeMovimentacao(e.target.value)}
        />
        <input className='input2'
          type="number"
          placeholder='Valor'
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>
      <div>
        <button className='botao1' onClick={() => registrarMovimentacao('Crédito')}>Crédito</button>
        <button className='botao2' onClick={() => registrarMovimentacao('Débito')}>Débito</button>
      </div>
      <div className="relatorio">
        <label>Relatório de Movimentações</label>
        <ul>
          {movimentacoes.map((mov, index) => (
            <li key={index}>
              <strong>{mov.nome}</strong> - R$ {mov.valor.toFixed(2)} ({mov.tipo})
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App