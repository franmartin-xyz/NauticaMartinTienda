import React, { useEffect, useState} from 'react'
export const cartContext = React.createContext([]);

export const CartContext = (props) => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(()=>{console.log(cartItems)},[cartItems]);
    const addItem= (item,quantity)=>{
        let index = isInCart(item.id);
        if(index>-1){
            let Cart = cartItems;
            Cart[index].quantity+=quantity;
            setCartItems(Cart)
        }else{
            setCartItems((prevState) => [...prevState, {...item,"quantity":quantity}])
        }
    }
    const totalPrice = ()=>{
        let sum = cartItems.reduce((acum, item)=>{return acum + item.price},0 );
        return sum;
    }
    const howManyItems = ()=>{ setCartItems(cartItems); return cartItems.length}
    const removeItem = (itemId)=>{
        let cart = [];
        // Cart.splice(isInCart(itemId),1);
        console.log(cartItems);
        cartItems.forEach(item => console.log(item));
        cart = cartItems.filter(item => item.id != itemId);
        console.log(cart);
        setCartItems(cart);
        // setCartItems(prevItems => console.log(prevItems));
        // setCartItems(prevItems => prevItems.filter(item => item.id == itemId))
    }
    const clear = ()=>{setCartItems([])}
    const isInCart = (id)=>{return cartItems.findIndex(e=>{return e.id === id ? true : false })}
    return(
    <cartContext.Provider value={{cartItems, setCartItems,addItem,removeItem,clear,isInCart,howManyItems,totalPrice}}>
        {props.children}
    </cartContext.Provider>
  )
}
export default CartContext;
