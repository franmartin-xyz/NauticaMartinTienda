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
    const howManyItems = ()=>{return CartItems.length}
    const removeItem = (itemId)=>{
        let Cart = CartItems;
        console.log(Cart);
        Cart.splice(isInCart(itemId),1);
        console.log(Cart);
        setCartItems(Cart)
    }
    const clear = ()=>{setCartItems([])}
    const isInCart = (id)=>{return CartItems.findIndex(e=>{return e.id === id ? true : false })}
    console.log(CartItems)
    return(
    <cartContext.Provider value={{CartItems, setCartItems,addItem,removeItem,clear,isInCart,howManyItems}}>
        {props.children}
    </cartContext.Provider>
  )
}
export default CartContext;
