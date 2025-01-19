import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link className='logo' to="/primeFlix/">Prime Flix</Link>
        <Link className='favoritos' to="/primeFlix/favoritos">Meus filmes</Link>
    </header>
  )
}

export default Header