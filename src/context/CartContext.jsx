import React, { useState} from 'react'
export const cartContext = React.createContext([]);

export const CartContext = (props) => {
    const [CartItems, setCartItems] = useState([]);
    const addItem= (item,quantity)=>{
        let index = isInCart(item.id);
        if(index>-1){
            let Cart = CartItems;
            Cart[index].quantity+=quantity;
            setCartItems(Cart)
        }else{
            setCartItems((prevState) => [...prevState, {...item,"quantity":quantity}])
        }
    }
    const totalPrice = ()=>{
        let sum = CartItems.reduce((acum, item)=>{return acum + item.price},0 );
        return sum;
    }
    const howManyItems = ()=>{ setCartItems(CartItems); return CartItems.length}
    const removeItem = (itemId)=>{
        let Cart = CartItems;
        Cart.splice(isInCart(itemId),1);
        setCartItems(Cart)
    }
    const clear = ()=>{setCartItems([])}
    const isInCart = (id)=>{return CartItems.findIndex(e=>{return e.id === id ? true : false })}
    return(
    <cartContext.Provider value={{CartItems, setCartItems,addItem,removeItem,clear,isInCart,howManyItems,totalPrice}}>
        {props.children}
    </cartContext.Provider>
  )
}
export default CartContext;
