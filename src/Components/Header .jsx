 import { signOut } from "firebase/auth";
import { Auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = ()=>{
   const user = useSelector(user=>user?.user)

const navigate = useNavigate()

const handleSignOut = ()=>{
    signOut(Auth).then(() => {

}).catch((error) => {
  // An error happened.~
});
}

    return(
        <div className='w-screen  flex justify-between bg-gradient-to-b from-black  absolute '>
            <div>
<img className='w-40' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
</div>
{user &&(
  <div className="flex items-center gap-2 mr-10">
    <img src={user?.photoURL} alt="User" className="h-8 w-8 rounded-full" />
    <span className='cursor-pointer text-white' onClick={handleSignOut}>Sign Out</span>
  </div>
  )}
        </div>
    )
}

export default Header