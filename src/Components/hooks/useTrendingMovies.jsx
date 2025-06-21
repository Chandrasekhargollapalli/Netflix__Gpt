import axios from "axios"
import { addtrendingmovies } from "../../Redux/movieSlice"
import { useDispatch } from "react-redux"
import { token } from "../../utils/constant"
import { useEffect } from "react"
const useTrendingMovies = ()=>{
const dispatch = useDispatch()

const getTrendingMovies = async ()=>{
   const response = await axios.get('https://api.themoviedb.org/3/movie/popular',{
     headers:{
        Authorization:`Bearer ${token}`
    }
   })
   console.log('trending movies response.....',response?.data?.results)
   dispatch(addtrendingmovies(response?.data?.results))
}

useEffect(()=>{
    getTrendingMovies()
},[])

}

export default useTrendingMovies