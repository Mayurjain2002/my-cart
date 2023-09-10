import React, { useContext } from 'react'
import { ShopContext } from '../../context/context';

const Product = (props) => {
    const {id,productName,price,productImage} = props.data;

    const {addCart,cartItems} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
    console.log(cartItemAmount)
  return (
    <div className="product">
        <img src={productImage} />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>₹{price}</p><br></br>
        </div>
        <button className='addToCartBttn' onClick={() => addCart(id)}>
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}

export default Product