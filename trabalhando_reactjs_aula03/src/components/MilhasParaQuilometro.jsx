import React from 'react'

const MilhasParaQuilometro = (props) => {
    let kmM = (props.distancia) * 1.60934;
    return (
      <div>
          <h1>{props.distancia} milhas é igual a {kmM.toFixed(2)} km. </h1>
      </div>
    )
}

export default MilhasParaQuilometro