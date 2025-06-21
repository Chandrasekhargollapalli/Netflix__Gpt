import AppRoutes from "./Components/Routes/AppRoutes"
import { useEffect } from "react"
import {onAuthStateChanged } from "firebase/auth";
import { Auth } from "./utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./Redux/userSlice";
import { useNavigate } from "react-router-dom";

import './App.css';


function App() {
const dispatch = useDispatch()
const navigate = useNavigate()
  useEffect(()=>{
// const auth = getAuth();
onAuthStateChanged(Auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {email,displayName,uid,photoURL} = user

    dispatch(addUser({email:email,displayName:displayName,uid:uid,photoURL:photoURL}))
   navigate('/Browse')
  } else {
    dispatch(removeUser())
      navigate('/')
  }
});
  },[])
  return (
  
   <div>
    <AppRoutes/>
    </div>
 
  
  )
}

export default App
