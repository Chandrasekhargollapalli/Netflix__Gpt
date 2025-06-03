import { useRef, useState } from "react";
import { InputValidation } from "./Vaidations";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { Auth } from "../utils/Firebase";
const LoginAndSignupForm = () => {
    const [isSignup,setSignup] = useState(true)
    const [validmessage,setValidMessage]= useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const SignUpToggle = ()=>{
        setSignup(!isSignup)
    }
    const HandleSubmit = (e)=>{
        e.preventDefault()
        const emailval = email.current.value
        const passwordval = password.current.value
const message =InputValidation({email:emailval,password:passwordval})

setValidMessage(message)
if(message) return ;

if(isSignup){
  createUserWithEmailAndPassword(Auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setValidMessage(errorMessage)
    // ..
  });
}else{
 

signInWithEmailAndPassword(Auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setValidMessage(errorMessage)
  });
}

    }
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-80 p-16 shadow-lg rounded w-sm '>
      <form onSubmit={HandleSubmit}>
        <div className='flex flex-col space-y-5'>
        <p className='text-3xl text-white'>{isSignup ? 'Sign Up' : 'Sign In'}</p>
        {isSignup && (
        <input className='bg-gray-500 p-2 rounded-md' type="text" placeholder="Enter a Name" />
        )}
        <input className='bg-gray-500 p-2 rounded-md'ref={email} type="email" placeholder="Enter a Email" />
        <input className='bg-gray-500 p-2 rounded-md' ref={password} type="password" placeholder="Enter a Password" />
        <p className='text-red-500'>{validmessage}</p>
        <button className='bg-red-500 p-2 text-white cursor-pointer' type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>
        <p className='text-white mt-8'>New to Nextflix?<span onClick={SignUpToggle} className='font-bold cursor-pointer'>{isSignup?'sign in now' : 'sign up now'}</span></p>
        </div>
      </form>
    </div>
  );
};

export default LoginAndSignupForm;
