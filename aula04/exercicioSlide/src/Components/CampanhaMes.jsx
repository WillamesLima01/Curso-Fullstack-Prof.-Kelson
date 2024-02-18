import React from 'react'
import styles from './CampanhaMes.module.css'

const CampanhaMes = (props) => {
 
    function DefinirMensagem(mes){
        if(mes === 'setembro') {
            return 'Prevenção ao suicídio'
        } else if (mes === 'outubro') {
            return 'Conscientização sobre o cancer de mama'
        } else { 
            return 'Prevenção e combate ao cancer de próstata'
        }
    }

    function DefinirCor (mes){
        if(mes === "setembro") {
            return styles.setembroClass
        } else if(mes === "outubro") {
            return styles.outubroClass 
        } else {
            return styles.novembroClass
        }
    }

    return (
        <div className={DefinirCor(props.mes)}>
            <p>{DefinirMensagem(props.mes)}</p>
        </div>
    )
}

export default CampanhaMes