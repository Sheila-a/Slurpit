import React from 'react'
import design from "./style.module.css"
import {Stock} from "../../assets/img"

const LSide = () => {
  return (
    <div className={design.cont}>
        <h1>SLURPIT</h1>
        <img src={Stock} alt="" className={design.img}/>  
        <div className={design.mid}>
            <h2><span> Manage All Your Stock</span> In One Place Using Our Platform</h2>
            <p>The One Stop Platform For All Your Stock Keeping For Large and Small Business.</p>
        </div>
      
    </div>
  )
}

export default LSide
