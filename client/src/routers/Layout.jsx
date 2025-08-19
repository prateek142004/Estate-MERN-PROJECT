import React from 'react'
import Navbar from '../components/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import '../style/layout.scss'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Layout = () => {
  return (
    <div className="layout">
      <div className='navbar'>
        <Navbar/>
      </div>

      <div className='content'>
      <Outlet/>
      </div>

    </div>
  )
}

const RequireAuth = () => {

  const {currentUser}=useContext(AuthContext)
  if(!currentUser) return <Navigate to='/login'/>

  return (
    <div className="layout">
      <div className='navbar'>
        <Navbar/>
      </div>

      <div className='content'>
      <Outlet/>
      </div>
    </div>
  )
}

export {Layout,RequireAuth}