import React, { useState, useEffect, useParams } from 'react'
import { stock } from '../../data/stock'
import { pedirProductos } from '../../helpers/pedirProductos'

export const ItemListContainer = (prop) => {
  
  const [items,setItems] = useState([])
  
  const [loading, setLoading] = useState(false)
  
  const {categoryId} = useParams()

  useEffect(() =>{
        setLoading(true)
        pedirProductos()
          .then((res) =>{
            if(categoryId){
              setItems(res.filter(prod => prod.category === categoryId)  )
            }else{
              setItems(res)
            }
          })
          .catch((error) => console.log(error))
          .finally(() =>{setLoading(false)})
      }, [categoryId])

    }
