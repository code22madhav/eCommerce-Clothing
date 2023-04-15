import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword} from '../firebase'
import { useState } from 'react';
import FormInput from '../Form-Input/FormInput';
import Button from '../Button/Button.component';
import './signin.style.scss'

const defaultFormField={
  email:'',
  password:''
}

const SignIn = () => {
    
  const [formField, setformField]=useState(defaultFormField);
  const {email, password}=formField;

  const handleSubmit= async(event)=>{
    event.preventDefault();

    try {
        const response = await signInAuthUserWithEmailAndPassword(email,password);
    } catch (error) {
        switch (error.code) {
            case 'auth/wrong-password':
              alert('incorrect password for email');
              break;
            case 'auth/user-not-found':
              alert('no user associated with this email');
              break;
            default:
              console.log(error);
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
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={logGoogleUser}>     
            Google sign in
          </Button>
        </div>
      </form>
    </div>
    
  )
}           //it is important to mention type submit in google button because by default type of button is 
            //submit and it will triger the form action

export default SignIn