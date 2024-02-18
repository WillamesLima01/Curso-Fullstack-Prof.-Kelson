import React,{ useEffect, useState } from 'react';
import axios from 'axios';

const Noticias = () => {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
       axios.get('http://localhost:5173/noticias')
            .then(Response => {
                setNoticias(Response.data);
            })          

            .catch(error => console.error("Ocorreu um erro!", error));
    }, []);

  return (
    <>
      <h1>Lista das Notícias</h1>

      {noticias.map(item => (
          <a href={`/visualizar-noticia/${item.id}`}> <h2 key={item.id}>{item.titulo}</h2></a>
      ))}

    </>
  )
 
}

export default Noticias