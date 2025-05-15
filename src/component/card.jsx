import React from "react";

function Card({ movies }) {
  return (
    <div className="p-10 grid gap-6 grid-cols-1 md:grid-cols-2">
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200" key={index}>
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
              className="border-2 rounded-2xl cursor-pointer p-1 mt-7 ml-40 bg-amber-200"
            >
              Watch
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-2">Loading movies...</p>
      )}
    </div>
  );
}

export default Card;
