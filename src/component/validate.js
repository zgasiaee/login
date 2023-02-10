export const validate = (data,type)=>{

    const errors={};

    if(type === 'signUp'){

        if(!data.name.trim()){
            errors.name='name is required'
        }else{
            delete errors.name
        }

        if(!data.confirmPassword){
            errors.confirmPassword='confirm password is required'
        }else if(data.password !== data.confirmPassword){
            errors.confirmPassword='password do not match'
        }else{
            delete errors.confirmPassword
        }
    
        if(!data.accept){
            errors.accept='accept our policy'
        }else{
            delete errors.accept
        }

    }

    if(!data.email){
        errors.email='email is required'
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
         errors.email='email is not valid'
    }else{
        delete errors.email
    }

    if(!data.password){
      errors.password='password is required'
    }else if(data.password.length<6){
        errors.password='password must be at least 6 character'
    }else{
        delete errors.password
    }

    return errors;
  
}