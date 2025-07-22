import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            
            <div className="footer-left">
                <img src={assets.logo2}/>
                <p>our juices are tasty and healthy</p>
                <div className="social-icons">
                    <img src={assets.instagram} />
                    <img src={assets.linkedin} />
                    <img src={assets.facebook} />

                </div>
            </div>
                <div className="footer-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
                <div className="footer-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 998986579</li>
                        <li>contact@juice.com</li>
                    </ul>
                </div>
        </div>
        <hr />
        <p className="footer-copyright"> Copyright 2025 GlowJUice.com - All Right Reserved.</p>
        </div>

  )
}

export default Footer