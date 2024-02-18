import React from "react";

const RenderizandoComFuncao = (props) =>{

    function opcao(oQueRenderizar){
        if(oQueRenderizar ==='PB'){
            return <h2>Paraíba</h2>
        }else{
            return <h2>João Pessoa</h2>
        }
    }

    return(
        <div>
            {opcao('PB')}
            {opcao('JP')}
        </div>
    )
}

export default RenderizandoComFuncao