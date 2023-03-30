import {  NotificationsActiveRounded, Portrait } from '@mui/icons-material'
import React from 'react'
import Date from '../../components/Date/Date'
import Search from '../../components/Search/Search'
import design from "./style.module.css"

const Admin_Main = () => {
  return (
    <div className={design.cont}>
    <div className={design.nav}>
    <Date/>
    <Search/>
    <div className={design.nav_right}>
    <button>Refresh</button>
    <NotificationsActiveRounded/>
    <Portrait/>
    <p>Slurpit</p>
    </div>
    </div>
    </div>
  )
}

export default Admin_Main
