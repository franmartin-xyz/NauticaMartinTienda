import React, { useContext, useState } from 'react'
import {UserPurchases} from "../index"
import { cartContext } from '../../context/CartContext'
import "./UserPurchasesContainer.css"
const UserPurchasesContainer = () => {
  const {requestPurchase,findPurchases} = useContext(cartContext);
  const [purchases,setPurchases] = useState([]);
  const[switchState,setSwitchState] = useState(false);
  const[switchState2,setSwitchState2] = useState(false);

  function handleSubmit(e){
    setSwitchState(false)
    setSwitchState2(false)
    e.preventDefault();
    const id = document.getElementById("purchaseId").value;
    requestPurchase(id,setPurchases,setSwitchState,setSwitchState2);
  }
  // function handleFindPurchases(e){
  //   e.preventDefault();
  //   const email = [document.getElementById("userEmail").value];
  //   console.log(email)
  //   findPurchases(email)
  // }
  return (
    <div className='UserPurchasesContainer__cont'>
      <>
      <title className='UserPurchasesContainer__title' >Encuentra tu compra</title>
      <form action="requestPurchase" onSubmit={(e)=>handleSubmit(e)} className="UserPurchasesContainer__form">
          <div className='cont2'>
          <input type="text" name="purhcaseId" id="purchaseId" placeholder='ingresa el id de tu compra' required={true}/>
          <button type='submit' className="requestPurchase__submitBtn">Buscar</button>
          </div>
          {/* <button type="button" className="requestPurchase__noIdBtn" onClick={()=> setSwitchState(false)}>no tengo mi id</button> */}
      </form>
    </>
    {/* { !switchState &&
      <>
      <title>No tengo mi id</title>
      <form action="findPurchase" onSubmit={(e)=>handleFindPurchases(e)}>
           <input type="text" name="userName" id="userName" /> 
          <input type="text" name="userEmail" id="userEmail" required={true} />
          <button type='submit' className="requestPurchase__submitBtn">Buscar</button>
      </form>
    </> }*/}
    {
      purchases.length >0 && switchState && <UserPurchases purchases={purchases} />
    }
    {
      switchState2 && <span className='noFound'>No se a podido encontrar</span>
    }
    </div>
  )
}

export default UserPurchasesContainer