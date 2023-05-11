import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../Item/Item.css'

export const Item = ({id, name, description, price, image, category}) => {
  return (
    <div className='item'>
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={image} className='imageitem'/>
      <Card.Body>
      <Card.Title>{name}</Card.Title>
        <Card.Title><h2>{description}</h2></Card.Title>
        <Card.Title>${price}</Card.Title>
        <Card.Title>{category}</Card.Title>
        <Link to={`/detail/${id}`}>
            <Button variant="danger">Ver detalles</Button>
          </Link>
      </Card.Body>
    </Card>
  </div>
  )
}
