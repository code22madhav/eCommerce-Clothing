import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from './firebase'
import { useState } from 'react'

const defaultFormField={
  name:'',
  email:'',
  password:'',
  confirmPassword:''
}

const SignIn = () => {
    
  const [formField, setformField]=useState(defaultFormField);
  const {name, email, password, confirmPassword}=formField;
  console.log(name, email , password);

  const handleSubmit= async(event)=>{
    event.preventDefault();
    
    if(password !== confirmPassword){
      alert('Password and ConfirmPassword Does not matched');
      return;
    }

    try {
      const {user}=await createAuthUserWithEmailAndPassword(email, password);
      console.log(user)
      await createUserDocumentFromAuth(user, {displayName:name});
    } catch (error) {
      if(error.code==='auth/email-already-in-use'){
        alert('Email allready Exist');
      }else{
        console.log('error in creating user',error);
      }
    }
  }

  const handleChange=(event)=>{
    setformField({...formField, [event.target.name]: event.target.value});
  }


    const logGoogleUser= async()=>{
        const { user }= await signInWithGooglePopup();
        const userDocRef= await createUserDocumentFromAuth(user);
    }

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" required onChange={handleChange} name='name' value={name}/>

        <label>Email</label>
        <input type="email" required onChange={handleChange} name='email' value={email}/>

        <label>Password</label>
        <input type="password" required onChange={handleChange} name='password' value={password}/>

        <label>Confirm Password</label>
        <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
        <button type='submit'>Sign Up</button>
      </form>
      <button onClick={logGoogleUser}> Sign IN</button>
    </div>
    
  )
}

export default SignIn