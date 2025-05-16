import React from "react";
import { useEffect } from "react";
import Card from "./card";
import Start from "./start";



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



return(
<div>
  <Start
    onSearch={setSearch}
    />
    <Card
      movies={movies}
      fetchTrailer={fetchTrailer}
    />
   
</div>

)

}

export default Fetch;