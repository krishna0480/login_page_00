import useForm from './useForm'
import React from 'react'
import validate from './validate'


function Validation() {
   const {handleChange,value,handleSubmit,error}=useForm(validate)
  return (
    <div className='container'>
        <h1>Sign up page</h1>
        <form className='form' onSubmit={handleSubmit}>
        <div className="form-imput">
          <label htmlFor="input1" className='form-lable'>Username</label>
          <input type="text" id='input1' className='form-input' placeholder='Username' name='username' value={value.userName} onChange={handleChange}/>
          {error.username && <p>{error.username}</p>}
        </div>
        <div className="form-imput">
          <label htmlFor="input2" className='form-lable'>Password</label>
          <input type="password" id='input2' className='form-input' placeholder='Password' value={value.password1} name="password1" onChange={handleChange}/>
        </div>
        <div className="form-imput">
          <label htmlFor="input3" className='form-lable'>Confirm Password</label>
          <input type="password" id='input3' className='form-input' placeholder='Enter Your Confirm Password' name="password2" value={value.password2} onChange={handleChange}/>
        </div>
        <div className="form-imput">
          <label htmlFor="input4" className='form-lable'>Mail</label>
          <input type="email" id='input4' className='form-input' placeholder='Mail' name="mail" value={value.mail} onChange={handleChange}/>
        </div>
        <button id="form-submit-btn" type="submit">sign up</button>
        <span className="form-input-login">already have a account? Login<a href='#'>here</a></span>
        </form>
    </div>
  )
}

export default Validation