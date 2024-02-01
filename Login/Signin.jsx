import React, { useState } from 'react'

const Signin = () => {
      
    // const regex=  /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g ||  !regex.test(data.mail);
    const[data,setData]=useState[{
        email:"",
        password:""
    }]
    const[cpassword,setCpassword]=useState("")
    const[mailError,setMailErr] = useState(false)
    const[passError,setPassErr]   = useState(false)
    const[cpassError,setCpassErr] = useState(false)
    const[goto,setGoto]=useState(false)

 const validate = () => {
     
    if(data.mail==='' || data.mail.length===0 ){
        setMailErr(true);
        setGoto(false)
    }
    if(data.password==='' || data.password.length <6 ||  data.password.length >15){
         setPassErr(true)
         }else{
            setPassErr(false)
    }
    if (cpassword !== data.password ) {
        setCpassErr(true)
        setGoto(false)
 }
 else {
     setCpassErr(false)
     }

 }


  return (
    <div>Signin
<div className="signin">
 <h2>Please sign in</h2>
   <label htmlFor="email">Email: </label>
   <input type="text" name="email" id="email" onChange={(e)=>{setData.mail(e.target.value)}}/><br/>
   {mailError ? <p style={{color:'red',fontSize:'15px'}}>Invalid Email ID!</p>:null}

   <label htmlFor="password">Password: </label>
   <input type="password" name="password" id="password" onChange={(e)=>{setData.password(e.target.value)}}/><br/>
   <label htmlFor="cpassword">Confirm Password: </label>
   <input type="password" name="cpassword" id="cpassword" onChange={(e)=>{setCpassword(e.target.value)}}/><br/>
   <button onClick={validate}>Submit</button><br/>
</div>
</div>
  )
}

export default Signin;