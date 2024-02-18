import React from 'react'
import style from './Components/style'
import CampanhaMes from './Components/CampanhaMes'
import EstacaoAno from './Components/EstacaoAno'
import FormularioDeContato from './Components/FormularioDeContato'
import FormularioDeContatoJson from './Components/FormularioDeContatoJson'

const App = () => {
  return (
    <div style={style}>
      <h2>Olá mundo!</h2>
      <p>Boa tarde a todos!</p>
      <a href='https://www.google.com' target='_blank'>Clique aqui!</a><br></br>
      <button type='button'>Click aqui!</button>
      <CampanhaMes mes="setembro" />
      <EstacaoAno estacao = 'verao' />
      < FormularioDeContatoJson />
    </div>
  )
}

export default App