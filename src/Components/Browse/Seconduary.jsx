import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const Seconduary = () => {
  const nowplaying = useSelector((state) => state?.movies?.nowPlayingMovies);
  const Trending = useSelector((state) => state?.movies?.trendingmovies);
    const TopRated = useSelector((state) => state?.movies?.toprated);
       const Upcoming = useSelector((state) => state?.movies?.upcoming);
  console.log("upcoming movies  ...", Upcoming);

  return (
    <div>
      <MovieList Title="Now Playing" Movies={nowplaying} />
      <MovieList Title="Trending" Movies={Trending} />
      <MovieList Title="Top Rated" Movies={TopRated} />
       <MovieList Title="Upcoming" Movies={Upcoming} />

    </div>
  );
};

export default Seconduary;
