import React from "react";
import { useEffect } from "react";
import Card from "./card";
import Start from "./start";
import Watchlist from "./watchlist";



function Fetch(){
     const ApiKey = import.meta.env.VITE_TMDB_API_KEY;
  const AccessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`;

const [movies,setMovies]=React.useState([]);
const[search,setSearch]=React.useState("");


useEffect(()=>{
 fetch(API_URL,{
  method:'GET',
  headers:{
    accept:'application/json',
   Authorization: `Bearer ${AccessToken}`

  }


 })
  .then(res=>res.json())
   .then(data=>setMovies(data.results))
   .catch(err=>console.error('Error fetching movies:',err));
   // console.log(setMovies)

},[]);

useEffect(()=>{
  if(search)
  fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${ApiKey}`)
  .then((res)=>res.json())
  .then((data)=> setMovies(data.results) )
  .catch((err)=>console.error("Error",err))
  
}

,[search,ApiKey])

//for fetching movie trailer




const fetchTrailer =async(movieId)=>{
  const res =await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${ApiKey}`);
  const data=await res.json();
 const trailer =data.results.find(
  (vid)=>vid.type==="Trailer" && vid.site==="YouTube"
 );
 if(trailer){
  window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
 }
else{
  alert("trailer not avaiable");
}
};
//watchlist 
const [watchlist, setWatchlist] = React.useState([]);

const toggleWatchlist = (movie) => {
  setWatchlist((prev) => {
    const exists = prev.find((m) => m.id === movie.id);
    if (exists) {
      return prev.filter((m) => m.id !== movie.id); // Remove
    } else {
      return [...prev, movie]; //add
    }
  });
};



return(
<div>
  <Start
    onSearch={setSearch}
    />

    <div className="flex flex-col items-center space-y-4">
      <h1 className="font-bold text-2xl pt-5">Movie Slideshow</h1>
    <Watchlist/>

    </div>

    <Card
      movies={movies}
      fetchTrailer={fetchTrailer}
        toggleWatchlist={toggleWatchlist}
  watchlist={watchlist}
    />
    {watchlist.length > 0 && (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4 text-center">Your Watchlist</h2>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {watchlist.map((movie) => (
        <div key={movie.id} className="bg-white p-4 rounded-xl shadow-md border">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover rounded-md mb-3"
          />
          <p className="text-center font-semibold">{movie.title}</p>
        </div>
      ))}
    </div>
  </div>
)}

   
</div>

)

}

export default Fetch;