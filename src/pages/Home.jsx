// src/pages/Home.js
import React from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

function Home({ movies }) {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;