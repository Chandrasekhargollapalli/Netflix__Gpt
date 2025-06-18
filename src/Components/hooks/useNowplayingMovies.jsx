import { useDispatch } from "react-redux"
import { addnowPlayingMovies } from "../../Redux/movieSlice"
import { useEffect } from "react"
import { token } from "../../utils/constant"
import axios from 'axios'

 const useNowplayingMovies = ()=>{
    const dispatch = useDispatch()

const getMovies = async ()=>{
try{
const response  = await axios.get('https://api.themoviedb.org/3/movie/now_playing?&page=1',{
    headers:{
        Authorization:`Bearer ${token}`
    }
})
dispatch(addnowPlayingMovies(response?.data?.results))
console.log('response of now playing movies',response?.data?.results)
}catch(error){
    console.log(error)
}
}
 useEffect(()=>{
getMovies()
},[])
}

export default useNowplayingMovies