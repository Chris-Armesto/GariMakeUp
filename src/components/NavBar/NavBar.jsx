import React from 'react'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartWidget } from '../CartWidget/CartWidget'
import gari from './gari.png'
import {Link} from 'react-router-dom'
import gari2 from './Gari-Makeup.jpeg'

export const NavBar = () => {
  return (
    <div className='menu'>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<img src={gari2} alt="Gari Makeup" width={250} />
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src={gari} className="nav-logo" alt="logo" /></Link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/productos/Producto">Mis Productos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/productos/Servicio">Mis Servicios</Link>
        </li>
        <li class="nav-item" >
          <Link class="nav-link ">Portfolio</Link>
        </li>
        <li class="nav-item" >
          <Link class="nav-link ">Contacto</Link>
        </li>
      </ul>
    </div>
    <CartWidget/>
  </div>
</nav>
</div>
  )
}




