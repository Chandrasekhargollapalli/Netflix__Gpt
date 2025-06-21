import MovieCards from "./MovieCards";

const MovieList = ({ Title, Movies }) => {
  return (
    <div>
      <div className="bg-black -mt-20 z-50 mb-20 ">
        <h1 className="text-white ml-10 text-2xl">{Title}</h1>
        <MovieCards movies={Movies} />
      </div>
    </div>
  );
};

export default MovieList;
