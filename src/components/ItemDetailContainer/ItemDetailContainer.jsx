import React from 'react'
import {useState, useEffect,useParams} from 'react'
import {pedirProductos} from '../../helpers/pedirProductos'
import {imSpinner3} from 'react-icon'
import {Item} from '../Item/Item'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
          
    setLoading(true)
    pedirProductos()
    .then(res=>{
      setItem(res.find(prod => prod.id === Number(Item.Id)))
    })
    .catch((error) => console.log(error))
    .finally(()=>{
      setLoading(false)

    })
  },[Item.Id]
  )
  return (
         <section>
          {
            loading
            ?<imSpinner3/>
            :<ItemDetail {...item}/>
          }
         </section>
  


     )
}
