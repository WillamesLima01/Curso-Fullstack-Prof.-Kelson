import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const VisualizarNoticia = () => {

    const { id } = useParams()

    const [noticia, setNoticia] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5173/noticias/${id}`)
            .then(Response => {
                setNoticia(Response.data)
            })
            .catch(error => console.error("Ocorreu um erro: ",error))
    }, []);

  return (
    <div>
        <h2>{noticia.titulo}</h2>
        <p>{noticia.texto}</p>
    </div>
  )
}

export default VisualizarNoticia