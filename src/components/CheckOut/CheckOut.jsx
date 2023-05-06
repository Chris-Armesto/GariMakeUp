import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import firebase from 'firebase'
import 'firebase/firestore'
import { getFirestore } from '../../firebase/config'
import Swal from 'sweetalert2'


export const CheckOut = () => {
  
const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)


  const [email, setEmail] = useState("")
  
  const [nombre, setNombre] = useState("")

  const [apellido, setApellido] = useState("")

  const [telefono, setTelefono] = useState("")

  const handleSubmit =(e) =>{
  e.preventDefault()
  
  console.log ("Email:", email)
  console.log ("Nombre:", nombre)
  console.log ("Apellido:", apellido)
  console.log ("Telefono:", telefono)
  
const orden ={
    buyer:{
        email,
        nombre,
        apellido,
        telefono
    },
item: carrito,
total_price: precioTotal(),
data: firebase.firestore.Timestamp.fromDate(new Date())
}
console.log(orden)
  

  const db = getFirestore()

  const ordenes = db.collection('ordenes')

  ordenes.add(orden)
  .then((res) => {
    Swal.fire({
        icon: 'succes',
        title: 'Su compra fue realizada con exito!',
        text: 'Su numero de compra: ${res.id} ',
        footer: '<a href="Guarde su numero de Compra, Nos comunicaremos a la brevedad"</a>',
        willClose: ()=>{ vaciarCarrito()}
      })
  }
  )
.finally (()=>{
    console.log ('Operacion realizada con exito')
})

carrito.forEach((item)=>{
    const docRef=db.collection('productos').doc(item.id)
    docRef.get ()
        .then ((doc) => {
            docRef.update({
                stock:doc.data().stock - item.counter
            })
        })
})
  }

    return (
    <div>
    <h3>Terminar compra</h3>
    <hr/>
    <form onSubmit={handleSubmit}   className='container mt-3'>
        <div className='form-gruop'>
            <label htmlfor="email">E-mail</label>
            <input type='text' className='form-control' onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div className='form-gruop'>
            <label htmlfor="nombre">Nombre</label>
            <input type='text' className='form-control' onChange={(e) => setNombre(e.target.value)} value={nombre}/>
        </div>
        <div className='form-gruop'>
            <label htmlfor="apellido">Apellido</label>
            <input type='text' className='form-control' onChange={(e) => setApellido(e.target.value)} value={apellido}/>
        </div>
        <div className='form-gruop'>
            <label htmlfor="telefono">Telefono</label>
            <input type='text' className='form-control' onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
        </div>
    <button type='submit' className='btn btn-info'>Finalizar</button>
    <Link to='/cart' className='btn btn-info'>Volver al Carrito</Link>



    </form>



    </div>
  )
}
