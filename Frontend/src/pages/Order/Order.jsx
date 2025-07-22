
import React, { useContext,  useEffect,  useState } from 'react'
import axios from 'axios';
import  {useNavigate} from 'react-router-dom'
import './Order.css'
import { Store } from '../../context/Store'
const Order = () => {
   const url = "http://localhost:4000";
  const {getTotAmt,token,juice_list,cartItems}=useContext(Store);
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })
  const onChangeHandler=(event)=>{
    const name =event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const placeOrder = async (event) => {
  event.preventDefault(); // ✅ Always prevent first

  if (!event.target.checkValidity()) {
    // Let the browser show native validation UI
    return;
  }

  try {
   

    let orderItems = [];
    juice_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        const itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });

     // ✅ Get userId
    let orderData = {
      
      address: data,
      items: orderItems,
      amount: getTotAmt() + 2,
    };

    
    let response = await axios.post(`${url}/api/order/place`, orderData, {
      headers: { token },
    });

    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      console.log("Server responded with success=false:", response.data);
      alert("Order failed: " + (response.data.message || "Unknown error."));
    }
  } catch (error) {
    console.log("❌ Error placing order:", error);
    alert("Order failed: " + (error.response?.data?.message || error.message));
  }
};
const navi=useNavigate();
  useEffect(()=>{
    if(!token){
      navi('/cart')
    }else if(getTotAmt()==0){
      navi('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='order'>
      <div className="order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type ="text" placeholder='First Name'/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName}type ="text" placeholder='Last Name'/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email}type ="email" placeholder='Email address'/>
        <input required name='street' onChange={onChangeHandler} value={data.street}type ="text" placeholder='Street'/>
        <div className="multi-fields">
          <input required name='city' onChange={onChangeHandler} value={data.city} type ="text" placeholder='City'/>
          <input required name='state' onChange={onChangeHandler} value={data.state}type ="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type ="text" placeholder='Zip Code'/>
          <input required  name='country' onChange={onChangeHandler} value={data.country} type ="text" placeholder='Country'/>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='Phone '/>
      </div>
      <div className="order-right">
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
            <button type="submit"> PROCEED TO PAYMENT</button>
          </div>
      </div>
    </form>

  )
}

export default Order