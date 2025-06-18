import { Route, Routes } from "react-router-dom"
import Body from "../body"
import Browse from "../Browse/Browse"


const AppRoutes = ()=>{
    return(
<Routes>
    <Route path='/' element={<Body/>}/>
    <Route path='/Browse' element ={<Browse/>}/>
</Routes>
    )
}
export default AppRoutes