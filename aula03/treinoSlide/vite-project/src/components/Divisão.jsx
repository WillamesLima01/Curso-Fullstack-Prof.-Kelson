import React from "react";

const Divisao = (props) => {
    return(
        <div>
            <h2>O resultado da divisão de {props.num1} / {props.num2} é: {props.num1/props.num2}</h2>
        </div>
    )
}
export default Divisao