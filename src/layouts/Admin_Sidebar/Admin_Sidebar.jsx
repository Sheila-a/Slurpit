import React from 'react'
import Dash from '../../components/Dash/Dash'
import design from "./style.module.css"
const Admin_Sidebar = () => {
  return (
    <div className={design.cont} >
      <h1 className={design.title}>SLURPIT</h1>
      <Dash name="Dashboard"/>
      <Dash name="Profile"/>  
      <Dash name="Available Users"/>  
      <Dash name="Dashboard"/>  
      <Dash name="Dashboard"/>  
      <Dash name="Dashboard"/>  
    </div>
  )
}

export default Admin_Sidebar
