import React from "react";
import {useState} from "react"

const HookContador = () => {

    const [contador, setContador] = useState(1);

    function adicionaValor() {
        setContador(contador + 1);
    }

    function clearContador(contador) {
        setContador(1);
    }
    return(
        <div>
            <h2>Contador com useState</h2>
            <button onClick={adicionaValor}>adicionar mais 1</button>
            <button onClick={clearContador}>iniciar contagem</button>
            <h2>O contador está em:{contador}</h2>
        </div>
    )
}
export default HookContador