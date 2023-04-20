import React from 'react'
import {createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../firebase'
import { useState } from 'react';
import FormInput from '../Form-Input/FormInput';
import Button from '../Button/Button.component';
import './signup.style.scss'

const defaultFormField={
  name:'',
  email:'',
  password:'',
  confirmPassword:''
}

const SignUp = () => {
  
  const [formField, setformField]=useState(defaultFormField);
  const {name, email, password, confirmPassword}=formField;

  const handleSubmit= async(event)=>{
    event.preventDefault();
    
    if(password !== confirmPassword){
      alert('Password and ConfirmPassword Does not matched');
      return;
    }

    try {
      const {user}=await createAuthUserWithEmailAndPassword(email, password);
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

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Name'
          type='text'
          required
          onChange={handleChange}
          name='name'
          value={name}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
    
  )
}

export default SignUp