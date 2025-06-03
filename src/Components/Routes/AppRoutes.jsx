import { Route, Routes } from "react-router-dom"
import Body from "../body"

const AppRoutes = ()=>{
    return(
<Routes>
    <Route path='/' element={<Body/>}/>
</Routes>
    )
}
export default AppRoutes