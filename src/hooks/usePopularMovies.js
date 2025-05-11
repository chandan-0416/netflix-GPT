import { useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies =() =>{
    // fetch Data from TMDB API and update store
    const dispatch = useDispatch();

    const getPopularMovies = async () =>{
    const data = await fetch(
       " https://api.themoviedb.org/3/movie/popular?page1", 
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };
    useEffect(() =>{
     getPopularMovies();
     // eslint-disable-next-line 
    },[]);
};

export default usePopularMovies;