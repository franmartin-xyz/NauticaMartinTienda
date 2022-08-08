import React,{useContext, useState} from 'react'
import {cartContext} from '../../context/CartContext'
import "./CartActions.css"
import { userLoginContext } from '../../context/LoginContext'
import Modal from "styled-react-modal"
const StyledModal = Modal.styled`
width: 20%;
height: 50%;
background-color:white;
`
const CartActions = (props) => {
  const [isOpen,setIsOpen] = useState(false)
  const {user} = useContext(userLoginContext);
    const {clear, totalPrice} = useContext(cartContext);
  const handleClickClearUp = ()=>{
    clear();
  }
  const handlePurchase = (e)=>{ 
    e.preventDefault();
   if (Object.keys(user).length !== 0) {let userPayload = {name:user.given_name,surname:user.family_name,email:user.email};
  console.log(userPayload);clear();}else{
    setIsOpen(true);
  }
}
function toggleModal(e){
  setIsOpen(!isOpen);
}
function handleFormSubmit(e){e.preventDefault();console.log("works"); clear();setIsOpen(false)}
  return (
    <>
    <div className='CartCartContainer__Actions'>
    <button className='CartContainer__btnClearUp' onClick={()=>handleClickClearUp()}>Limpiar Carrito</button>
    <div className='CartCartContainer__buy'>
      <span className='CartContainer__span'>Precio Total: ${totalPrice()}</span>
      <button className='CartContainer__btnBuy' onClick={(e)=>handlePurchase(e)}>Comprar</button>
    </div>
    </div>
    <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
    <div className='Modal__container'>
    <title className='Modal__title'>No estás loggeado</title>
    <div className='Modal__divider'></div>
    <span className='Modal__span'>te podes loggear con tu gmail o rellenar el formulario de compra</span>
    <form className='Modal__form' onSubmit={(e)=>handleFormSubmit(e)}>
      <input type="text" id='name' required={true} />
      <input type="text" id='surname' required={true} />
      <input type="email" id='email' required={true} />
      <button type='submit'>Terminar Compra</button>
    </form>
    <button onClick={toggleModal}>Close</button>
    </div>
    </StyledModal>
    </>
  )
}

export default CartActions