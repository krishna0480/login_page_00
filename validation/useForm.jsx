import React, { useState } from 'react'


function useForm(validate) {
  
    const [value,setValue] = useState({
        userName:"",
        mail:"",
        password:"",
        password2:"",
    })

    const [error,setError] = useState({

    })

    const handleChange = (event) =>{
        const{name,value} = event.target;

        setValue((prevValues)=>{
            return{
                ...prevValues,
                [name]:value,
                //without square brackets name and values will be stored at name:email,vlaue
            }
        })
      }
      const handleSubmit =(event) =>{
            event.preventDefault()
            setError(validate(value))
      }
      return{handleChange,value,handleSubmit,error}
}

export default useForm