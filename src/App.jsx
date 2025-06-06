import AppRoutes from "./Components/Routes/AppRoutes"
import { useEffect } from "react"
import {onAuthStateChanged } from "firebase/auth";
import { Auth } from "./utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./Redux/userSlice";

function App() {
const dispatch = useDispatch()

  useEffect(()=>{
// const auth = getAuth();
onAuthStateChanged(Auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {email,displayName,uid} = user
    console.log('app.js userrr',user)
    dispatch(addUser({email:email,displayName:displayName,uid:uid}))
    // ...
  } else {
    dispatch(removeUser())
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
