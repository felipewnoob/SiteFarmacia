import React from 'react'
import './Navbar.css'
import Logo from './Logo'

function Navbar() {
  return (
    <div className="container-navbar">
      <Logo />
      <h1 className='texto'>Farmácia da Márcia</h1>
    </div>
  )
}

export default Navbar