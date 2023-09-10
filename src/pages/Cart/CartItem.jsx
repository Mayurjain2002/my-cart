import React, { useContext } from 'react'
import "./cart.css"
import { ShopContext } from '../../context/context'


const CartItem = (props) => {

    const {id,productName,price,productImage} = props.data;
    const {cartItems,addCart,removeCart,updated} = useContext(ShopContext)


  return (
    <div className='cartItem'>
        <img src={productImage} />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p> ₹{price} </p>
            <div className="countHandler">
                <button onClick={() =>{
                    removeCart(id)
                }}>-</button>

                <input value={cartItems[id]} onChange={(e) =>{
                    updated(Number(e.target.value) ,id)
                }} />

                <button onClick={() =>{
                    addCart(id)
                }}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem