import React from 'react';
import img2 from '../assets/img2.jpg';

const TrabalhandoComImagensCondicional = (props) => {
    
    function renderizar(imagem) {
        if(imagem === 'public') {
            return <img src='img1.jpg' alt='flor do deserto' />            
        } else {
            return <img src= {img2} alt='cavalo preto' />
        }
    }

    return renderizar(props.imagem);
}

export default TrabalhandoComImagensCondicional;