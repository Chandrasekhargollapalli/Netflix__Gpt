import { useEffect } from "react"
import axios from "axios"
import { token } from "../../utils/constant"
import { useDispatch } from "react-redux"
import { addttoprated } from "../../Redux/movieSlice"
const useTopratedMovies = ()=>{
    const dispatch= useDispatch()
useEffect(()=>{

const Toprated =  async()=>{
    const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?',{
         headers:{
                Authorization:`Bearer ${token}`
            }
    })
    dispatch(addttoprated(response?.data?.results))
}
Toprated()

},[])
}

export default useTopratedMovies