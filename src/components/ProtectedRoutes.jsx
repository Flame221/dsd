import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Register from './Register';
const ProtectedRoutes = () => {
  const isLoggedin = useSelector(state => state.auth.isLoggedin)

  return isLoggedin ? <Outlet/> : <Register/>

}

export default ProtectedRoutes