import React from 'react'
import axios from 'axios'

const AdicionarAlunos = () => {
    
    const addAluno = async () => {
        const Response = await axios.post('http://localhost:3000/alunos',
        {
            nome: "Rambo",
            email: "rambo@gmail.com"
        }
        );
        console.log(`Foi adicionado o aluno: ${Response.data}`)
        alert("Aluno cadastrado com sucesso!")
    }

  return (

    <div>
        <button onClick={addAluno}>Adicionar Rambo</button>
    </div>

  )
}

export default AdicionarAlunos