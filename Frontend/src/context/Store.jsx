import { createContext, useEffect, useState } from "react";
import axios from 'axios';


 const Store= createContext(null)

const StoreProvider =(props)=>{


    const [cartItems,setCartItems]=useState({});
    const url="https://juice-app-backend.onrender.com"
    const [token,setToken]=useState("")
    const [juice_list,setJuiceList]=useState([])

    const addToCart=async (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }
        const removeFromCart=async (itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
            if(token){
                await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
            }
        }
        const getTotAmt=()=>{
            let totAmt=0;
            for(const i in cartItems){
                if(cartItems[i]>0){
                let iInfo=juice_list.find((product)=>product._id=== i)
                totAmt+=iInfo.price*cartItems[i]
            }}
            return totAmt;
        }
        const fetchJuiceList=async ()=>{
            const response=await axios.get(url+"/api/juice/list");
            setJuiceList(response.data.data)
        }
        const loadCartData=async(token)=>{
            const response=await axios.post(url+"/api/cart/get",{},{headers:{token}});
            setCartItems(response.data.cartData);
        }
        useEffect(()=>{
            
            async function loadData() {
                await fetchJuiceList();
                if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"))
            }
            }
            loadData();
        },[])

    const contextValue={
        juice_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotAmt,
        url,
        token,
        setToken
    }
    return (
        <Store.Provider value={contextValue}>
            {props.children}
        </Store.Provider>
    )
}
export default StoreProvider;
export {Store};
