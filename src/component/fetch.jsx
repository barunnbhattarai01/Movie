import React from "react";
import { useEffect } from "react";
import Card from "./card";



function Fetch(){
const API_URL= "https://api.themoviedb.org/3/movie/popular?api_key=ba8eda4761510d8b37fe161e4371b7f2&language=en-US&page=1";
const Acess_Token="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYThlZGE0NzYxNTEwZDhiMzdmZTE2MWU0MzcxYjdmMiIsIm5iZiI6MTc0NzMwNTkxNy4zMjgsInN1YiI6IjY4MjVjNWJkNzFlMzAyM2ZmMWExNzRkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MaKKN-N-hoR_6ocbaHhgsZlhgDhYGB4UR-JFfUplcEc";

const [movies,setMovies]=React.useState([]);


useEffect(()=>{
 fetch(API_URL,{
  method:'GET',
  headers:{
    accept:'application/json',
   Authorization: `Bearer ${Acess_Token}`

  }


 })
  .then(res=>res.json())
   .then(data=>setMovies(data.results))
   .catch(err=>console.error('Error fetching movies:',err));
    console.log(setMovies)

},[])


return(
<div>
    <Card
      movies={movies}
    />
</div>

)

}

export default Fetch;