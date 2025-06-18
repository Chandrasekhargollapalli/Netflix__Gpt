

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addTrailerVideos } from "../../Redux/movieSlice"
import useTrailerVideo from "../hooks/useTrailerVideo"

const VideoBackground = ({Title})=>{
    const {id} = Title
useTrailerVideo(id)
const movieid = useSelector((state)=>state?.movies?.trailerVideos)
    

    return(
        <div className='w-screen h-full'>
          <iframe  className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+movieid+"?autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
        </div>
    )//https://www.youtube.com/embed/"xitSoRbHJ50"?autoplay=1&mute=1
}

export default VideoBackground