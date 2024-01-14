import React from 'react'
import FahrenheitParaCelsius from './FahrenheitParaCelsius'

const CelsiusParaFahrenheit = (props) => {
    let Fahrenheit = 1.8*(props.temperatura) + 32;
  return (
    <div>
       <h1>{props.temperatura} C será {Fahrenheit} F </h1>
    </div>
  )
}

export default CelsiusParaFahrenheit