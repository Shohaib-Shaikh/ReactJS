import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import MyTable from '../Table/MyTable'

function MainDash() {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards/>
        <MyTable/>
    </div>
  )
}

export default MainDash