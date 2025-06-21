import { IMG_URL } from "../../utils/constant"

const MovieCards = ({movies})=>{
    // const Parth = movies[0].poster_path

    return(
        <div className=' flex overflow-x-scroll hide-scrollbar rounded-full'>

            {movies?.map(items=> <img className='p-5 w-48' key={items?.id} src={IMG_URL+items?.poster_path} alt="" />)}

        </div>
    )
}

export default MovieCards