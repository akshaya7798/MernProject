import React, { useContext, useEffect } from 'react'
import './verify.css'
import axios from 'axios';

import { useNavigate, useSearchParams } from 'react-router-dom'
const Verify = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const success =searchParams.get("success")
    const orderId =searchParams.get("orderId")
   const url="https://juice-app-backend.onrender.com";
   const navi =useNavigate();
    const verifyPay= async () =>{
        const response=await axios.post(url+"/api/order/verify",{success,orderId})
        if(response.data.success){
            navi("/myorders")
        }else{
            navi("/")
        }
    }
    useEffect (()=>{
        verifyPay();
    },[])
  return (
    <div className='verify'>
        <div className="spin">

        </div>
    
    </div>
  )
}

export default Verify
