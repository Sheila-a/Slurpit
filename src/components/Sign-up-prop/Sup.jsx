import React, {useState,} from 'react'
import Button from '../Button/button'
import design from "./style.module.css"
import { Link } from 'react-router-dom'


const Sup = () => {
  const [employeeId, setEmployeeId]= useState("")
  const [password, setPassword] = useState("")

  const handleEmployeeIdChange = (e) =>{
    setEmployeeId(e.target.value)
  }
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

const handleContinue=()=>{
  const data = {
    employeeId: employeeId,
    password: password
  }
  fetch("https://slurpit.onrender.com/user", {
    method:"POST",
    body: JSON.stringify(data),
    headers:{
      "Content-Type":"application.json"
    }
  })
}
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
          <input type="text" value={employeeId} onChange={handleEmployeeIdChange}  />
        </div>
        <div className={design.fields}>
          <p>Password</p>
          <input type="password" value={password} onChange={handlePasswordChange}/>
        </div>
        <div>
          <input type="checkbox" name="remember" id="" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <Button className={design.btn} name="Continue" onClick={handleContinue} />
        <p className={design.p}>Already have an account? <span>
          <Link to="/login">
          Login</Link></span></p>
        </div>
      
    </div>
  )
}

export default Sup
