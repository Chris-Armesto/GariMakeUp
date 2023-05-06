import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import '../../data/stock'
import './ItemDetail.css'
import {Link, useNavigate} from 'react-router-dom'
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

export const ItemDetail = ({id, name, description, price, image, category, detalle, stock}) => {
  
  const navigate = useNavigate()
  const volverHaciaAtras = () =>{
  navigate(-1)}


  const{addToCart} = useContext(CartContext)

  const[counter, setCounter] = useState (0)

  const sumarAlCarrito = () =>{
    const newItem = {
      id,
      name,
      description,
      image,
      price,
      category,
      counter
    }
    console.log(newItem)
    addToCart(newItem)
}



  return (
    <div className='item'>
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Codigo:{id}</Card.Title>
          <Card.Title>{description}</Card.Title>
          <Card.Title>${price}</Card.Title>
          <Card.Title>DETALLES DE PRODUCTO : {detalle}</Card.Title>
          <Card.Title>Categoria: {category}</Card.Title>
          <ItemCount max ={stock} modify={setCounter} cantidad={counter} />
          <Button onClick={sumarAlCarrito} variant="danger">Comprar</Button>
          </Card.Body>
          <Button onClick={volverHaciaAtras} variant = 'danger'> Volver</Button>
          <Link to='/cart'className='btn btn-info'>Ir al Carrito</Link>
      </Card>
    </div>
  )
}