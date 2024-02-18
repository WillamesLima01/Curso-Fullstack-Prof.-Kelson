import React from 'react'
import styles from './EstacaoAno.module.css'

const EstacaoAno = (props) => {

    function DefinirMsg(estacao) {
        if (estacao === 'verao') {
            return 'Tempo de praia e sol!'
        } else if(estacao === 'outono') {
            return 'Folhas caindo, outuno chegando!'
        } else if (estacao === 'inverno') {
            return 'Época de frio e aconchego!'
        } else {
            return 'Flores e cores, é primavera!'
        }
    }

    function DefinirTema (estacao) {
        if (estacao === 'verao') {
            return styles.veraoClass
        } else if (estacao === 'outuno') {
            return styles.outunoClass
        } else if (estacao === 'inverno') {
            return styles.invernoClass
        } else 
            return styles.primaveraClass
    }





  return (
    <div className= {DefinirTema(props.estacao)}>
        <p>{DefinirMsg(props.estacao)}</p>
    </div>
  )
}

export default EstacaoAno