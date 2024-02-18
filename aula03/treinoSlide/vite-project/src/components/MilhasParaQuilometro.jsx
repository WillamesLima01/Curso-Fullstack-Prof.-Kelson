import React from "react";

const MilhasParaQuilometro = (props) =>{
    let KmM = (props.distancia)*1.60934;

    return(
        <div>
            <h2>O resultado da transformação de {props.distancia} milhas em quilometros é: {KmM.toFixed(2)} km.</h2>
        </div>
    )
}
export default MilhasParaQuilometro