import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'

function Dashboard() {
  return (
    <div className='Container'>
  <Header/>
  <Sidebar/>
  <Content/>    
    </div>
  )
}

export default Dashboard
