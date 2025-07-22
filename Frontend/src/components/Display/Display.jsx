import React, { useContext } from 'react'
import './Display.css'
import { Store } from '../../context/Store'
import Juiceitem from '../Juiceitem/Juiceitem'
const Display = ({category}) => {
    const {juice_list}=useContext(Store)
  return (
    <div className='juice-display' id='juice-display'>
        <h2>Top juices near you</h2>
        <div className="juice-display-list">
            {juice_list.map((item,index)=>{
              if(category==="All" || category===item.category){
                return <Juiceitem key ={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
              }
               
            
            )}
        </div>
    </div>
  )
}

export default Display