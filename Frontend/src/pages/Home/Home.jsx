import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExpMenu from '../../components/ExploreMenu/ExpMenu'
import Display from '../../components/Display/Display'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
        <Header/>
        <ExpMenu category={category} setCategory={setCategory}/>
        <Display category={category} />
        <AppDownload />
    </div>
  )
}

export default Home