import React, { Component } from 'react';
import Movie from '../movie';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const api_url = process.env.REACT_APP_API_URL + '/v1/movies'
    fetch(api_url)
      .then (response => response.json())
      .then(movies => {
        this.setState({ movies })
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    let movies = []
    for(let i = 0; i < this.state.movies.length; i++) {
      movies.push(
        <Movie key={i} movie={this.state.movies[i]} />
      );
    }
    return (
      <div className="shopping-list">
        <h1>List of movies</h1>
        <ul>
          {movies}
        </ul>
      </div>
    );
  }
}

export default MovieList;
