

function validate(value) {
    let error={};

    if(!value.username.trim()){
        error.username="Username Required"
    }

    if(!value.mail.trim()){
        error.mail="Email is required"
    }
    else if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.mail)){
         error.mail="email is required"
    }
    if(!value.password.trim()){
        error.password="password is required"
    }

    else if(value.password.length>6){
        error.password="password needs to be 6 characters or more"
    }

    if(!value.password1.trim()){
        error.password1 = "password is required"
    }

    else if(value.password!==value.password1){
       error.password1="password do not match"
    }

    return (error);
}

export default validate