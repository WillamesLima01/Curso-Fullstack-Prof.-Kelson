import React from "react";

const CelsiusParaFahrenheit = (props) => {

    let Fahrenheit = 1.8*(props.temperatura)+ 32

    return(
        <div>
            <h2>O resultado da transformação de {props.temperatura} ºC será {Fahrenheit} ºF</h2>
        </div>
    )
}
export default CelsiusParaFahrenheit