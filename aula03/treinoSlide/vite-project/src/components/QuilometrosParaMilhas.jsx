import React from "react";

const QuilometroParaMilhas = (props) =>{
    let Milhas = (props.distancia)/1.60934;

    return(
        <div>
            <h2>O resultado da transformação de {props.distancia} quilometros para milhas é: {Milhas.toFixed(2)} milhas </h2>
        </div>
    )
}
export default QuilometroParaMilhas