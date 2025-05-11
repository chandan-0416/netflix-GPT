import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies =useSelector((store)=> store.movies);
  return (
    movies.nowPlayingMovies && (
    <div className="bg-black ">
    <div className="mt-0 md:-mt-45 relative z-20 ml-2">
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Popular"} movies={movies.popularMovies}/>
    <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Hrror"} movies={movies.nowPlayingMovies}/> 
    </div>
    </div>
    )
  )
}

export default SecondaryContainer;
