import axios from "axios"
import {addupcoming } from "../../Redux/movieSlice"
import { useDispatch } from "react-redux"
import { token } from "../../utils/constant"
import { useEffect } from "react"
const useUpcomingMovies = ()=>{
const dispatch = useDispatch()

const getTrendingMovies = async ()=>{
   const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?',{
     headers:{
        Authorization:`Bearer ${token}`
    }
   })
   console.log('upcoming  movies response.....',response?.data?.results)
   dispatch(addupcoming(response?.data?.results))
}

useEffect(()=>{
    getTrendingMovies()
},[])

}

export default useUpcomingMovies