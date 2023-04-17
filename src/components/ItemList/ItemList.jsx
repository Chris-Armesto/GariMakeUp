import React from 'react'
import './itemlist.css'
import '../Item/Item'

export const ItemList = ({productos=[]}) => {
  return (
    <div className='container'>
    <h3>Mis Productos</h3>
    <hr />
    <div className='fila'>
    {productos.map((item) => <Item {...item} key={item.id}/>)}
    </div>
</div>
  )
}
