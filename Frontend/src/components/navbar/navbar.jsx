import React,{useContext, useState} from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { Store } from '../../context/Store'


const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("Home");
    const {getTotAmt,token,setToken} =useContext(Store);
    const navigate=useNavigate();
    const logout=()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/")
    }
    return (
    <div className='navbar'>
    <Link to='/'><img src={assets.logo2} 
     className='logo'/></Link>
     <ul className="navbar-menu">
        <Link to='/'onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore'onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download'onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
        <a href='#footer' onClick={()=>setMenu("About us")} className={menu==="About us"?"active":""}>About us</a>
     </ul>
     <div className="navbar-right">
        
        <div className='navbar-search-icon'>
            <Link to='/cart'><img className='basket'src={assets.basket}/></Link>
            <div className={getTotAmt()===0?"":"dot"}></div>
        </div>
        {!token?
        <button onClick={()=>setShowLogin(true)}> sign in </button>:
        <div className='nav-profile'>
         <img src={assets.user} alt="" />
         <ul className="nav-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag} alt="" />
            <p>Orders</p></li>
            <hr />
            <li onClick={logout}>
               <img src={assets.logout} alt="" />
               <p>Logout</p>
            
            </li>

         </ul>
        </div>
}
     </div>
    </div>
  )
}

export default Navbar