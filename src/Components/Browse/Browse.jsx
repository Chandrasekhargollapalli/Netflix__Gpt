
import Header from '../Header '
import useNowplayingMovies from '../hooks/useNowplayingMovies'
import MainComponent from './MainComponent'

const Browse = ()=>{

useNowplayingMovies()
    return(
        <div>
            <Header/>
            <MainComponent/>
        </div>
    )
}

export default Browse