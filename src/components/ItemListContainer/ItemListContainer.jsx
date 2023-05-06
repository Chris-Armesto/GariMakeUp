import React, { useEffect, useState } from 'react';
import {ImSpinner3} from 'react-icons/im'
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/config';

export const ItemListContainer = ({greating}) => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)
 
  /* setLoading(true)
    pedirProductos()
      .then((res) =>{
        if(categoryId){
          setItems(res.filter(prod => prod.category === categoryId)  )
        }else{
          setItems(res)
        }
      })
      .catch((error) => console.log(error))
    .finally(() =>{setLoading(false)*/
 
  const {categoryId} = useParams()


  useEffect(() =>{
    setLoading(true)

    const db =getFirestore();

    const productos = db.collection('productos')
               
     if (categoryId){
      const filtrado = productos.where ("category", "==", categoryId)
      filtrado.get(      )
      .then ((res)=>{
        const newItem= res.docs.map ((doc) =>{
          return {id: doc.id, ...doc.data()}
        })
        setItems(newItem)
      })
        .catch((error) => console.log(error))
        .finally(()=>
        setLoading (false))

     }else{

    productos.get()
    .then((res) =>{
      const newItem = res.docs.map((doc) =>{
        return{id: doc.id, ...doc.data()}
      })
      console.table(newItem)
      setItems(newItem)
    })
    .catch ((error) => console.log(error))
    .finally(()=>{
      setLoading (false)
    })
  }
}
  , [categoryId])




  return (
    <>
      {
        loading
        ?<div className='spinner'><ImSpinner3/></div>
        : <ItemList productos={items}/>
      }
    </>
  )}