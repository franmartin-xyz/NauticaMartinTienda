import "./UserPurchases.css"
import React from 'react'
import "./UserPurchases.css"
const UserPurchases = (props) => {
  console.log(props.purchases)
  return (
    <div className="UserPurchase__container">
     <title className="UserPurchase__name">Compra a nombre de {props.purchases[0].buyer.name} {props.purchases[0].buyer.surname} el día {props.purchases[0].date}</title>
    { props.purchases[0].items.map((items)=>
    { return (
      <div key={items.id} className="UserPurchase__itemContainer">
      <img className='UserPurchase__img' src={items.pictureUrl} alt=""/>
      <title className='UserPurchase__title'>{items.title}</title>
      <span className='UserPurchase__price'> Precio:${items.price} | Cantidad: {items.quantity}</span>
      </div>)}
     )}
     <span className="UserPurchase__total" >Precio Total: {props.purchases[0].total}</span>
     </div>
  )
}

export default UserPurchases
