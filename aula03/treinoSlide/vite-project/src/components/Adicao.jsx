import React from "react";

const Adicao = (props) => {
    return(
        <div>
            <h2>O resultado de {props.num1}+{props.num2} é: {props.num1 + props.num2}</h2>
        </div>
    )
}

export default Adicao