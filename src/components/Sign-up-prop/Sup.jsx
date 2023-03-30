import React from 'react'
import Button from '../Button/button'
import design from "./style.module.css"


const Sup = () => {
  return (
    <div className={design.cont}>
      <div className={design.card}>
        <div className={design.title}>
        <h2>Create New Account</h2>
        <p>Please register and fill your details</p>
      </div>
      <div className={design.fields}>
        <p>Full Name</p>
        <input type="text" />
      </div>
      <div className={design.fields}>
        <p>Company email</p>
        <input type="email" />
      </div>
      <div className={design.fields}>
        <p>Employee ID</p>
        <input type="text" />
      </div>
      <div className={design.fields}>
        <p>Password</p>
        <input type="password" />
      </div>
      <div>
        <input type="checkbox" name="remember" id="" />
        <label htmlFor="remember">Remember me</label>
      </div>
      <Button className={design.btn}/>
      </div>
      
    </div>
  )
}

export default Sup
