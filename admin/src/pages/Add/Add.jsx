import React, {  useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const Add = () => {
    const url="https://juice-app-backend.onrender.com";
    const [image,setImage] =useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Detox & Healthy Juices"
    })
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        const formData=new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response=await axios.post(`${url}/api/juice/add`,formData)
        if(response.data.success){
            setData({
        name:"",
        description:"",
        price:"",
        category:"Detox & Healthy Juices"
    })
    setImage(false)
    toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }
    
  return (
    <div className='add'>
        <form className='flex-col'onSubmit={onSubmitHandler}>
            <div className="add-img flex-col">
                <p> Upload image</p>
                <label htmlFor='image'>
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
            </div>
            <div className="add-product-name flex-col">
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} type='text'name='name' placeholder='type here'/>
            </div>
            <div className="add-product-desc flex-col">
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description}name="description" rows="6" placeholder='write content here ' required></textarea>
            </div>
            <div className="add-cat-price">
                <div className="add-cat flex-col">
                    <p>Product Category</p>
                    <select onChange={onChangeHandler} name="category" >
                        <option value="Detox & Healthy Juices">Detox & Healthy Juices</option>
                        <option value="Smoothies">Smoothies</option>
                        <option value="Classic juices">Classic juices</option>
                        <option value="Special juices">Special juices</option>
                        
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product price</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$200' />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add
