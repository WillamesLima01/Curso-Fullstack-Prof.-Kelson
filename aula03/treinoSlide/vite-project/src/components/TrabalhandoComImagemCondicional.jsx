import React from "react";
import lamborguine from '../assets/lamborguine.jpg';

const TrabalhandoComImagemCondicional = (props) => {

    function renderizar(imagem) {
        if(imagem === 'public') {
            return <img src="ferrari.jpg" alt="ferrari azul" />
        } else {
            return <img src= {lamborguine} alt="lamborguine amarela" />
        }
    }

    return renderizar(props.imagem);
}

export default TrabalhandoComImagemCondicional