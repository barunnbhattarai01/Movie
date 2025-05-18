import React from "react";

function Watchlist(){

  const [movies, setMovies] = React.useState([]);
  const [index, setIndex] = React.useState(0);

    const AccessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;


  React.useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AccessToken}` 
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(res => res.json())
      .then(res => setMovies(res.results))
      .catch(err => console.error(err));
  }, []);

   React.useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % movies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [movies]);

  if (movies.length === 0) return <p className="text-center">Loading slideshow...</p>;

  const path = movies[index]?.backdrop_path || movies[index]?.poster_path;
  if (!path) return <p className="text-center">No image for this movie.</p>;

  const imageUrl = `https://image.tmdb.org/t/p/w500${path}`;

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <img
        src={imageUrl}
        alt={movies[index]?.title}
        className="w-full h-64 object-cover transition duration-700 ease-in-out"
      />
      <div className="absolute bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white p-4 w-full">
        <h2 className="text-xl font-bold">{movies[index]?.title}</h2>
        <p className="text-sm truncate">{movies[index]?.overview}</p>
      </div>
    </div>
  );

}
export default Watchlist