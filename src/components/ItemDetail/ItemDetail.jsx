import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { stock } from '../../data/stock'
import { ItemCount } from '../ItemCount/ItemCount'



export const ItemDetail = (id, description, price, image, category, details) => {
  return (
    <div className='item'>
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
      <Card.Title>{id}</Card.Title>
        <Card.Title>{description}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Card.Title>{category}</Card.Title>
        <Card.Title>{details}</Card.Title> 
        <ItemCount/>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  </div>
  )
  }