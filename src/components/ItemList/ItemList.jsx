import React from 'react'
import {Item} from '../Item/Item'
import './ItemList.css'

export const ItemList = ({productos=[]}) => {
  return (
    <div className='container'>
    <hr />
    <div className='fila'>
    {productos.map((item) => <Item {...item} key={item.id}/>)}
    </div>
</div>
  )
}
