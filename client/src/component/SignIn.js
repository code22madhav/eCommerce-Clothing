import React from 'react'
import { signInWithGooglePopup } from './firebase'

const SignIn = () => {
    const logGoogleUser= async()=>{
        const response= await signInWithGooglePopup();
        console.log(response)
    }

  return (
    <>
    <button onClick={logGoogleUser}> Sign IN</button>
    </>
  )
}

export default SignIn