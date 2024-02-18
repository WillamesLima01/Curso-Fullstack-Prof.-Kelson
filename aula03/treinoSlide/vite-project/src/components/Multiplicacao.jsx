import React from "react";

const Multiplicacao = (props) => {
    return(
        <div>
            <h2>O resultado da multiplicação de {props.num1}x{props.num2} é: {props.num1 * props.num2}</h2>
        </div>
    )
}
export default Multiplicacao