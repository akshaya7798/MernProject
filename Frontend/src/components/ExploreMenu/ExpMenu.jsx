import React from 'react'
import './ExpMenu.css'
import { menu_list } from '../../assets/assets'
const ExpMenu = ({category,setCategory}) => {
  return (
    <div className='explore' id='explore'>
        <h1> Explore our Menu</h1>
        <p className='explore-text'> Welcome, Adventurer! Your taste buds are about to embark on a refreshing expedition. Select Your path and discover the perfect sip!</p>
        <p className='explore-text'> Dive into sun-kissed flavours!!!</p>
        <div className="explore-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} key={index} className="explore-list-item">
                    <img className={category===item.menu_name?"active":""}src={item.menu_image}/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
</div>
<hr />
    </div>
  )
}

export default ExpMenu