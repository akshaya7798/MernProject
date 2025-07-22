import React, { useState, useEffect } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const url = "http://localhost:4000";

  const fetchOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (err) {
      toast.error("Server error");
      console.error(err);
    }
  };

  const statusHandler=async(event,orderId)=>{
    const response=await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      fetchOrders();
    }
    
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="order add">
      <h2>Order Page</h2>
      <div className="list">
        {orders.map((order, index) => (
          <div key={index} className="item">
            <img src={assets.parcel} alt="" />
            <div>
              <p className="juice">
                {order.items.map((item, i) => {
                  return (
                    item.name +
                    " x" +
                    item.quantity +
                    (i === order.items.length - 1 ? "" : ", ")
                  );
                })}
              </p>
              <p className="name">
                {order.address.firstName+" "+order.address.lastName}</p>
                <div className="address">
                  <p>{order.address.street+","}
                </p>
                <p className="city"> {order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div>
              <p className='phone'>{order.address.phone} </p>
            </div>
                <p> Items:{order.items.length}</p>
                <p>${order.amount}</p>
                <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} >
                  <option value="Juice Processing">Juice Processing</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Orders;
