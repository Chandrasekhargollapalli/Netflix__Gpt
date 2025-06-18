import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"
import { useSelector } from "react-redux"

const MainComponent = ()=>{
    const Title = useSelector((state)=>state?.movies?.nowPlayingMovies?.[0])
    if(!Title) return null


    return(
        <div>
<VideoTitle Title={Title}/>
<VideoBackground Title={Title}/>

        </div>
    )
}

export default MainComponent