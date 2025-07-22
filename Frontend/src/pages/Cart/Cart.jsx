import React, { useContext } from 'react'
import './Cart.css'
import { Store } from '../../context/Store'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const url="http://localhost:4000"
  const {cartItems,juice_list,removeFromCart,getTotAmt}=useContext(Store);
  const navi =useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {juice_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return(
              <div>
              <div className="cart-title cart-items-item" >
                <img src={url+"/images/"+item.image}/>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
              </div>
            )
          }

        })}
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotAmt()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotAmt()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotAmt()===0?0:getTotAmt()+2}</b>
              </div>
             
            </div>
            <button onClick={()=>navi('/order')}> PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className="cart-promo-input">
                <input type="text" placeholder='promocode' />
                <button >Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart