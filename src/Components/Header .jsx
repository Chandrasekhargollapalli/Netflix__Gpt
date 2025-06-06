 import { signOut } from "firebase/auth";
import { Auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = ()=>{
   const user = useSelector(user=>user?.user)
   console.log('heaseder user....',user?.user?.email)
const navigate = useNavigate()

const handleSignOut = ()=>{
    signOut(Auth).then(() => {
 navigate('/')
}).catch((error) => {
  // An error happened.
});
}

    return(
        <div className='w-40 absolute'>
<img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
<img src={user?.photoURL} alt="" />
<h1 className='cursor-pointer' onClick={handleSignOut}>SignOut</h1>
        </div>
    )
}

export default Header