import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>{this.props.movie.title}</li>
  }
}

export default Movie;
