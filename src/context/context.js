import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for(let i = 1 ; i< PRODUCTS.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ContextProvider = (props) => {

    const getTotal = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const [cartItems,setcartItems] = useState(getDefaultCart);

    const addCart = (iId) =>{
        setcartItems((prev) => (
            {...prev, [iId] : prev[iId] + 1}
        ))
    }

    const removeCart = (iId) =>{
        setcartItems((prev) => (
            {...prev, [iId] : prev[iId] - 1}
        ))
    }

    const updated = (newAmount,iId) =>{
        setcartItems((prev) =>(
            {...prev, [iId] : newAmount}
        ))
    }

    const contextValue = {cartItems,addCart,removeCart,updated,getTotal};

   

  return (
   <ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>
  )
}

export default ContextProvider