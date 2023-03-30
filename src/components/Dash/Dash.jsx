import React from 'react'
import design from "./style.module.css"

const Dash = (props) => {
  return (
    <div className={design.dash}>
        <img src={props.ico} alt="" />
      {props.name}
    </div>
  )
}

export default Dash
