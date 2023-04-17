import React from 'react'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartWidget } from '../CartWidget/CartWidget'
import gari from './gari.png'
import {Link} from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='menu'>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src={gari} className="nav-logo" alt="logo" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Quien Soy</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">Mis Productos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">Tips</Link>
        </li>
        <li class="nav-item" href="#">
          <a class="nav-link ">Portfolio</a>
        </li>
        <li class="nav-item" href="#">
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




