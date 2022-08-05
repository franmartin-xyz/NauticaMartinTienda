import React, { useState} from 'react'
import {addDoc, collection, getFirestore, updateDoc, doc, writeBatch} from "firebase/firestore"
export const cartContext = React.createContext([]);

export const CartContext = (props) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    // let items = localStorage.getItem("cart");
    // items !== "" && setCartItems(items);
    const sendDoc = (Data) =>{
        Data.forEach(o => {
        const db = getFirestore();
        const orderCollection = collection(db, "products");
        addDoc(orderCollection, o)
        .then((res)=>console.log(res.id))
        .catch((err)=>console.log("error",err));
        });
    };

    const sendOrder = (totalPrice, buyerData) =>{
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        const order = {
            item: cartItems,
            total: totalPrice,
            buyer: buyerData,
        };
        addDoc(orderCollection, order)
        .then((res)=>console.log(res.id))
        .catch((err)=>console.log("error",err));
    };

    const updateOrder = () => {
        const db = getFirestore();
        const docRef = doc(db, "items", "PatNxY6HFkj2NWjdBiQD");
        updateDoc(docRef, { price: 500 })
          .then((res) => alert("Order updated"))
          .catch((err) => alert("Order update failed"));
      };
    
    const multipleUpdates = () => {
    const db = getFirestore();
    const batch = writeBatch(db);
    const docRef = doc(db, "orders", "yFNkyYhtywT0QBmpI9W1");
    const docWithoutPrice = doc(db, "orders", "0eVkTcqobXQvsYyeQTwv");
    batch.update(docRef, { total: 180 });
    batch.update(docWithoutPrice, {
        buyer: { mail: "test", name: "test", phone: "1111" },
    });
    batch.commit();
    };

    const addItem= (item,quantity)=>{
        let items = JSON.parse(localStorage.getItem("cart"));
        let index = isInCart(item.id);
        if(index>-1){
            items[index].quantity+=quantity;
            localStorage.setItem("cart",JSON.stringify(items));
            setCartItems(items)
        }else{
            items = [...items,{...item,"quantity":quantity}];
            localStorage.setItem("cart",JSON.stringify(items));
            setCartItems(items);
        }
    }
    const totalPrice = ()=>{
        // let items = localStorage.getItem("cart"); items !== "" && setCartItems(items);
        let sum = cartItems.reduce((acum, item)=>{return acum + item.price * item.quantity},0 );
        return sum;
    }
    const howManyItems = ()=>{
        // let items = localStorage.getItem("cart"); items !== "" && setCartItems(items); 
        setCartItems(cartItems); return cartItems.length}
    const removeItem = (itemId)=>{
        let items = JSON.parse(localStorage.getItem("cart"));
        let cart = items.filter(items => items.id != itemId);
        localStorage.setItem("cart",JSON.stringify(cart));
        setCartItems(cart);
    }
    const clear = ()=>{setCartItems([]);
        localStorage.setItem("cart",JSON.stringify([]));
    }
    const isInCart = (id)=>{ let items = JSON.parse(localStorage.getItem("cart")); 
    return items.findIndex(e=>{return e.id === id ? true : false })}
    return(
    <cartContext.Provider value={{cartItems, setCartItems,addItem,removeItem,clear,isInCart,howManyItems,totalPrice,sendOrder,updateOrder,multipleUpdates,sendDoc}}>
        {props.children}
    </cartContext.Provider>
  )
}
export default CartContext;
