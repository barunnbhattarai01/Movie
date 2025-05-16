import React, { useState } from "react";

function Start({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4 bg-white p-8 rounded-2xl shadow-lg "
      >
        
      
        <img
          src="./logo.png" 
          alt="Logo"
          className="w-12 h-12 object-contain"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-72 "
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Start;
