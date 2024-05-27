function Validation(values){
    let error = {};
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*[a-z])(?=.*[A-Z])[A-zA-Z0-9]{8,}$/

    if(values.first_name === ""){
        error.first_name="Name should not be empty"
    }
    else {
        error.first_name = ""
    }

    if(values.last_name === ""){
        error.last_name="Name should not be empty"
    }
    else {
        error.last_name = ""
    }

    if(values.email === ""){
        error.email = "email should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "email didn't match"
    } else {
        error.email=""
    }

    if(values.phonenumber === ""){
        error.phonenumber="PhoneNumber should not be empty"
    }
    else {
        error.phonenumber = ""
    }

    if(values.role === ""){
        error.role = "role should not be empty"
    } else {
        error.role=""
    }


    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password didn't match"
    } else {
        error.password=""
    }
    return error;
}

export default Validation;