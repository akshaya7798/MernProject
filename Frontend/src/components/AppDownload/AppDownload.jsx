import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id ='app-download'>
        <p>For better Experience Download <br /> GlowJuice App</p>
        <div className="app-platforms">
            <img src={assets.play}/>
            <img src={assets.app}/>
        </div>
    </div>
  )
}

export default AppDownload