import React from 'react'
import './Header.css'
import banner from '../../assets/banner.png';



const Header = () => {
  return (
    <div className='header'
       
  style={{
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
       
       
        <div className="header-contents">
            
           
            
        </div>
    </div>
  )
}

export default Header