import React,{useContext, useState} from 'react'
import {cartContext} from '../../context/CartContext'
import "./CartActions.css"
import { userLoginContext } from '../../context/LoginContext'
import {RiCheckboxCircleLine,RiCloseCircleLine} from "react-icons/ri"
import Modal from "styled-react-modal"
const StyledModal = Modal.styled`
width: fit-content;
height: fit-content;
background-color:#011139;
font-family: 'Manrope', sans-serif;
display: flex;
flex-direction: column;
align-items:center;
`
const SuccessfulPurchase = Modal.styled`
width: fit-content;
height: fit-content;
background-color:#011139;
color:white;
font-family: 'Manrope', sans-serif;
`
const FailedPurchase = Modal.styled`
width: fit-content;
height: fit-content;
background-color:#011139;
color:white;
font-family: 'Manrope', sans-serif;
`
const CartActions = (props) => {
  const [userPayload,setUserPayload] = useState({});
  const [isOpen,setIsOpen] = useState(false);
  const [isSuccessfulPurchase,setIsSuccessfulPurchase] = useState(false);
  const [isUnSuccessfulPurchase,setIsUnSuccessfulPurchase] = useState(false);
  const {user} = useContext(userLoginContext);
    const {clear, totalPrice,sendPurchase} = useContext(cartContext);
  const handleClickClearUp = ()=>{
    clear();
  }
  const handlePurchase = (e)=>{ 
    e.preventDefault();
   if (Object.keys(user).length !== 0) {
    let payload = {name:user.given_name,surname:user.family_name,email:user.email};
    setUserPayload(payload);
    sendPurchase(payload,setIsSuccessfulPurchase,setIsUnSuccessfulPurchase);}else{
    setIsOpen(true);
  }
}
function toggleModal(e){
  setIsOpen(!isOpen);
}
function toggleModal2(e){
  setIsSuccessfulPurchase(!isSuccessfulPurchase);
}
function toggleModal3(e){
  setIsUnSuccessfulPurchase(!isUnSuccessfulPurchase);
}
function handleFormSubmit(e){
  e.preventDefault();
  setIsOpen(false);
 let payload = {name:document.getElementById("name").value,surname:document.getElementById("surname").value,email:document.getElementById("email").value,tel:document.getElementById("tel").value};
 console.log(payload);
 setUserPayload(payload);
sendPurchase(payload,setIsSuccessfulPurchase,setIsUnSuccessfulPurchase);
}
const widgetStyle = { fill:"green", width:"100px", height:"100px"};
const widgetStyleBad = { fill:"red", width:"100px", height:"100px"};
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
    <span className='Modal__span'>Ingresa con tu gmail o <br></br> completa el formulario de compra</span>
    <form className='Modal__form' onSubmit={(e)=>handleFormSubmit(e)}>
      <input type="text" id='name' placeholder='Tu nombre' required={true} />
      <input type="text" id='surname' placeholder="Apellido" required={true} />
      <input type="email" id='email' placeholder="email@example.com" required={true} />
      <input type="tel" id='tel' placeholder="+5434964325" required={false} />
      <button type='submit' id='submitBtn'>Terminar Compra</button>
    </form>
    </div>
    </StyledModal>
    <SuccessfulPurchase isOpen={isSuccessfulPurchase} afterClose={()=>clear()} onBackgroundClick={toggleModal2} onEscapeKeydown={toggleModal2}>
      <div className='SuccessfulPurchase__container'>
        <title className='SuccessfulPurchase__title'>Compra Realizada Satisfactoriamente</title>
        <RiCheckboxCircleLine style={widgetStyle}></RiCheckboxCircleLine>
        <span className='SuccessfulPurchase__span'>Recibirá un Email a {user.email === undefined ? userPayload.email : user.email} con su factura y detalles</span>
        </div>
    </SuccessfulPurchase>
    <FailedPurchase isOpen={isUnSuccessfulPurchase} afterClose={()=>clear()} onBackgroundClick={toggleModal3} onEscapeKeydown={toggleModal3}>
      <div className='SuccessfulPurchase__container'>
        <title className='SuccessfulPurchase__title'>Su compra no se ha podido efectuar</title>
        <span>Razón: No Hay Stock</span>
        <RiCloseCircleLine style={widgetStyleBad}></RiCloseCircleLine>
        </div>
    </FailedPurchase>
    </>
  )
}

export default CartActions