import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";


const Browse = () => {
  const showGptSearch=useSelector(store=> store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
   return (
    <div>
    <Header/>
    {showGptSearch ?
    (<GptSearch/>
    ):(
      <>
      <MainContainer />
      <SecondaryContainer />
      </>
      )}

    
    {/**
    MainContainer
      - VideoBackground
      - VideoTitle
    SecondaryContainer
      - MoiveList * n
          - cards * n
    */}
    </div>
  );
};

export default Browse;
