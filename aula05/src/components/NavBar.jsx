import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to = "/">Inicial</Link><br/>
        <Link to = "/a-faculdade">A Faculdade</Link><br/>
        <Link to = "/dpo-lgpd">DPO LGPD</Link><br/>
        <Link to = "/noticias">Notícias</Link><br/>
        <Link to = "/visualizar-noticia">Notícias</Link><br/>
    </nav>
  )
}

export default NavBar