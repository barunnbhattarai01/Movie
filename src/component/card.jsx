import React from "react";
import { motion } from "framer-motion";


function Card({ movies ,fetchTrailer,toggleWatchlist,watchlist}) {

const isInWatchlist =(movieId)=>
  watchlist.some((movie)=>movie.id===movieId);
 



  return (
    <div className="p-10 grid gap-6 grid-cols-1 md:grid-cols-2">
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-xl mb-4"
            />
            <p className="text-lg font-semibold mb-1">
              Movie Name: <span className="font-normal">{movie.title}</span>
            </p>
            <p>Released Date: <span>{movie.release_date}</span></p>
            <p>Rating: <span>{movie.vote_average}</span></p>
            <p>Language: <span>{movie.original_language.toUpperCase()}</span></p>
            <button
              type="submit"
               onClick={() => fetchTrailer(movie.id)}    
              className="border-2 rounded-2xl cursor-pointer p-1 mt-7 ml-40 bg-amber-200 hover:scale-105 transition-transform"
            >
              Watch Trailer
            </button>

          <button
          onClick={()=> toggleWatchlist(movie)}
         className={`px-4 py-2 rounded-full transition ${
                  isInWatchlist(movie.id)
                    ? "bg-red-400 text-white hover:bg-red-500"
                    : "bg-green-400 text-white hover:bg-green-500"
                }`}>

              { isInWatchlist(movie.id) ? "Remove from Watchlist" : "Add to Watchlist"}

                </button>

          </motion.div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-2">Loading movies...</p>
      )}
    </div>
  );
}

export default Card;
