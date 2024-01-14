import React from 'react'

const QuilometroParaMilhas = (props) => {
    let kmM = (props.distancia) / 1.60934;
  return (
    <div>
        <h1>{props.distancia} km é igual a {kmM.toFixed(2)} milhas. </h1>
    </div>
  )
}

export default QuilometroParaMilhas