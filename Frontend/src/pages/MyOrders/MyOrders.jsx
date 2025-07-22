import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import './MyOrders.css';
import axios from 'axios';
import { Store } from '../../context/Store';

const MyOrders = () => {
  const url = "http://localhost:4000";
  const { token } = useContext(Store);
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      const response = await axios.post(
        url + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (token) {
      fetch();
    }
  }, [token]);

  return (
    <div className="orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => (
          <div key={index} className="order">
            <img src={assets.bag} alt="Order Bag" />
            <p>{order.items.map(item => `${item.name}X${item.quantity}`).join(", ")}</p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p>
              <span>&#x25cf;</span> <b>{order.status}</b>
            </p>
            <button onClick={fetch}>Track Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
