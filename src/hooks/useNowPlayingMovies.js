import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies =() =>{
    // fetch Data from TMDB API and update store
    const dispatch = useDispatch()

    const getNowPlayingMoives = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() =>{
   getNowPlayingMoives();
   // eslint-disable-next-line 
    },[]);
};

export default useNowPlayingMovies;