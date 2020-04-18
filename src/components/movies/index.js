import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: { name: 'Test Movie' },
    };
  }

  componentDidMount() {
    const api_url = process.env.REACT_APP_API_URL
    fetch(api_url)
      .then (response => response.json())
      .then(movie => {
        this.setState({ movie })
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="shopping-list">
        <h1>{this.state.movie.name}</h1>
      </div>
    );
  }
}

export default Movie;
