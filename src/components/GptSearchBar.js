import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { API_OPTIONS} from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { ai } from "../utils/openai";

const GptSearchBar = () => {
const dispatch=useDispatch();
const langKey= useSelector((store)=>store.config.lang);
const searchText= useRef(null);
  // search movie in TMDB
  const searchMovieTMDB=async(movie)=>{
  const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+
    movie+
    "&include_adult=false&language=en-US&page=1",
     API_OPTIONS
    );
    const json=await data.json()
     return json.results;
};
    const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const query="Act as a movie recomendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 10 movies, comma separated like the example given ahead. Example Result: Bhool bhulaiya, Shaadi mai jaroor aana, Koi mill gaya, Kabhi khushi kabhi gum, Andhadhun. Also give the results without any leading space";  
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents:query,
    });
    
     console.log(response?.candidates[0]?.content?.parts[0].text?.split(","));
     const gptMovies=(response?.candidates[0]?.content?.parts[0].text?.split(","));
     const movieData= gptMovies.map((movie)=>searchMovieTMDB(movie));
     const tmdbResults = await Promise.all(movieData);
     console.log(tmdbResults);
     dispatch(addGptMovieResult({movieNames:gptMovies, movieResults: tmdbResults}));
  };
//  if(!gptResults.text){
//     //TODO: write Error Handling
//   }

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
         ref={searchText}
         type="text" 
         className="p-4 m-4 col-span-9"
         placeholder={lang[langKey].gptSearchPlaceholder}
         />
        <button 
         className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        onClick={handleGptSearchClick}
        >
         {lang[langKey].search}
        </button>
      </form>
    </div>
  )
};
export default GptSearchBar;