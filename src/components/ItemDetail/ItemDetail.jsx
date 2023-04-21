import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import '../../data/stock'
import './ItemDetail.css'

export const ItemDetail = ({id, description, price, image, category, detalle}) => {
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
          <ItemCount />
          <Button variant="danger">Comprar</Button>
        </Card.Body>
      </Card>
    </div>
  )
}