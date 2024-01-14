import React from 'react'

const FahrenheitParaCelsius = (props) => {
    let celsius = (props.temperatura - 32) * 5/9;
  return (
    <div>
        <h1>{props.temperatura} F será {celsius} C </h1>
    </div>
  )
}

export default FahrenheitParaCelsius