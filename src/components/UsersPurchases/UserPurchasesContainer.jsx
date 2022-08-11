import React from 'react'
import {UserPurchases} from "../index"

const UserPurchasesContainer = () => {
  return (
    <>
    <title>Encuentra tu compra</title>
    <form action="requestPurchase">
        <span>Ingresa el id de tu compra</span>
        <input type="text" name="purhcaseId" id="purhcaseId" placeholder='ingresa el id de tu compra' />
        <button type='submit' onClick={""} className="requestPurchase__submitBtn">Buscar</button>
        <button type="button" onClick={""} className="requestPurchase__noIdBtn">no tengo mi id</button>
    </form>
    <form action="findPurchase">
        <input type="text" name="userName" id="userName" />
        <input type="email" name="userEmail" id="userEmail" />
    </form>
    </>
  )
}

export default UserPurchasesContainer