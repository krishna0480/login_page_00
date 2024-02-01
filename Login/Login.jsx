import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate() 

  const handleChange = () => {
    localStorage.setItem("login",true)
    navigate("/home")
  }

  return (
    <>
    LOGIN
    <button onClick={handleChange}>login</button>
    </>
  )
}

export default Login