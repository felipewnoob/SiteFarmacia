import React from 'react'
import './Corpo.css'
import Contato from './Contato'
import camisaFarmacia from '../assets/camisa-farmacia.jpg'

function Corpo() {
  return (
    <div className="container-corpo">
      <div className="banner">
        <h2>Bem vindo a Farmácia da Márcia!</h2>
        <p>mais informações em breve...</p>
      </div>
      <div className="banner-camisas">
        <h3>Veja Nossas Camisas</h3>
        <img src={camisaFarmacia} className="camisa-farmacia" alt="era para ter uma imagem aqui..."  />
      </div>
      <Contato />
    </div>
  )
}

export default Corpo