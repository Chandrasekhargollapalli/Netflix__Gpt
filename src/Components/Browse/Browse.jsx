

import Header from '../Header '
import useNowplayingMovies from '../hooks/useNowplayingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import MainComponent from './MainComponent'
import useTopratedMovies from '../hooks/useTopratedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'


const Browse = ()=>{

    useNowplayingMovies()
useTrendingMovies()
useTopratedMovies()
useUpcomingMovies()

    return(
        <div>
            <Header/>
            <MainComponent/>
        </div>
    )
}

export default Browse