import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailerVideos } from "../../Redux/movieSlice"
import axios from "axios"
import { token } from "../../utils/constant"

const useTrailerVideo = (id)=>{
    const dispatch = useDispatch()
 useEffect(()=>{
    const getMovieVideos =  async()=>{
        try{
const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`,{
    headers:{
        Authorization:`Bearer ${token}`
    }

})
const Videos = response?.data?.results
const FilterdVideos = Videos.filter(item=>item.type == "Trailer")
const FinalVideo  = FilterdVideos[0]



// dispatch(addTrailerVideos(FinalVideo?.key))
dispatch(addTrailerVideos(FinalVideo?.key))
        }catch(error){
            console.log(error)
        }
    }
    getMovieVideos()
      },[])
}

export default useTrailerVideo
