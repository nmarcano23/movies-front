import React from 'react';
import Movie from '../src/components/movies'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a movie.
        </p>
        <Movie />
      </header>
    </div>
  );
}

export default App;
