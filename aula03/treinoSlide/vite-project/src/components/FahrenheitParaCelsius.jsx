import React from "react";

const FahrenheitParaCelsius = (props) => {

    let Celsius = (props.temperatura - 32) * 1.8

    return(
        <div>
            <h2>O resultado da transformação de {props.temperatura} ºF será {Celsius} ºC</h2>
        </div>
    )
}
export default FahrenheitParaCelsius