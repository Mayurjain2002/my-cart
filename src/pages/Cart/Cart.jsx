import React, { useContext } from 'react'
import { ShopContext } from '../../context/context'
import { PRODUCTS } from '../../products'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {


  const {cartItems, getTotal} = useContext(ShopContext)
  const totalAmount = getTotal();

  const navigate = useNavigate()

  return (
    <div className="cart">
      <div className="">
        {totalAmount>0 ?(
        <h1>Your Cart Items</h1>
        ):("")}
      </div>
      <div className="cart">
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}
      </div>
      {totalAmount>0 ? (
      <div className="checkout">
        <p>SubTotal : ₹{totalAmount}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      ) : (
        <h1 className='emptyy'>Your Cart is Empty.</h1>
      )}

    </div>
  )
}

export default Cart