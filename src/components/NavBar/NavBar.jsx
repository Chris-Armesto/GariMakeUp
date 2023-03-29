import React from 'react'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartWidget } from '../CartWidget/CartWidget'
import gari from './gari.png'


export const NavBar = () => {
  return (
    <div className='menu'>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={gari} className="nav-logo" alt="logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Quien Soy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mis Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tips</a>
        </li>
        <li class="nav-item" href="#">
          <a class="nav-link ">Portfolio</a>
        </li>
        <li class="nav-item" href="#">
          <a class="nav-link ">Contacto</a>
        </li>
      </ul>
    </div>
    <CartWidget/>
  </div>
</nav>
</div>
  )
}




