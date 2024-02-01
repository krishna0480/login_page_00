import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
    let navigate = useNavigate() 
    
    const handleChange = () => {
        localStorage.removeItem("login")
        navigate("/login")
      }
      
   
  return (
    <div>
    
      <h1>agafgag</h1>
      <button onClick={handleChange}>logout</button>
    </div>
  )
}

export default Home