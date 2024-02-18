import React from 'react'
import { useState } from 'react';

const FormularioDeContato = () => {  

    const [nome, setNome] = useState('')
    const [contato, setContato] = useState('')
    const [msg, setmsg] = useState('')

    const handleNome = (e) => {
        setNome(e.target.value)
    }

    const handleContato = (e) => {
        setContato(e.target.value)        
    }

    const handleMsg = (e) => {
        setmsg(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Vai enviar o seguinte formulário para o back-end : ")
        console.log(`Nome: ${nome} Contato: ${contato} Mensagem: ${msg}`)
    }    

    return(
        <div>
            <h3>Formulário de Contatos</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome:
                        <input type='text' name='nome' value={nome} onChange={handleNome} />
                    </label>
                </div>
                <div>
                    <label>
                        Contato:
                        <input type='text' name='contato' value={contato} onChange={handleContato} />
                    </label>
                </div>
                <div>
                    <label>
                        Mensagem:<br></br>
                        <textarea name='textarea' rows={5} cols={21} value={msg} onChange={handleMsg}></textarea>
                    </label>
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )

}      

export default FormularioDeContato;