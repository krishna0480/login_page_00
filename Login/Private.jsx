import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';


const Private = () => {

let  isAuth = localStorage.getItem("login") 

return isAuth === "false" ? <Navigate to="/login" /> : <Outlet /> 

}

export default Private