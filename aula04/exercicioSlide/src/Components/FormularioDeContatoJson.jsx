import React, { useState } from 'react';

// Definição do componente FormularioDeContatoJson
const FormularioDeContatoJson = () => {  

    // Definição dos estados para nome, contato e mensagem utilizando o hook useState
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [msg, setMsg] = useState('');

    // Função para atualizar o estado 'nome' conforme o usuário digita no input
    const handleNome = (e) => {
        setNome(e.target.value);
    }

    // Função para atualizar o estado 'contato' conforme o usuário digita no input
    const handleContato = (e) => {
        setContato(e.target.value);
    }

    // Função para atualizar o estado 'msg' conforme o usuário digita no textarea
    const handleMsg = (e) => {
        setMsg(e.target.value);
    }

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        // Criando um objeto com os dados do formulário
        const formData = {
            nome: nome,
            contato: contato,
            mensagem: msg
        };

        // Convertendo o objeto em uma string JSON
        const jsonData = JSON.stringify(formData);

        // Simulando o envio dos dados para um endpoint HTTP (imprimindo no console)
        console.log("Vai enviar o seguinte formulário para o back-end : ");
        console.log(jsonData);

        // Aqui você poderia fazer uma requisição HTTP real utilizando fetch, axios, etc.
    }    

    // Retornando o JSX do componente
    return(
        <div>
            {/* Título do formulário */}
            <h3>Formulário de Contatos</h3>
            {/* Formulário com evento onSubmit associado à função handleSubmit */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome:
                        {/* Input para capturar o nome, com valor definido pelo estado 'nome' e onChange associado à função handleNome */}
                        <input type='text' name='nome' value={nome} onChange={handleNome} />
                    </label>
                </div>
                <div>
                    <label>
                        Contato:
                        {/* Input para capturar o contato, com valor definido pelo estado 'contato' e onChange associado à função handleContato */}
                        <input type='text' name='contato' value={contato} onChange={handleContato} />
                    </label>
                </div>
                <div>
                    <label>
                        Mensagem:<br></br>
                        {/* Textarea para capturar a mensagem, com valor definido pelo estado 'msg' e onChange associado à função handleMsg */}
                        <textarea name='textarea' rows={5} cols={21} value={msg} onChange={handleMsg}></textarea>
                    </label>
                </div>
                {/* Botão de submit para enviar o formulário */}
                <button type='submit'>Enviar</button>
            </form>
        </div>
    );
}      

// Exportação do componente FormularioDeContatoJson
export default FormularioDeContatoJson;
