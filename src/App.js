import React, { Component } from 'react';
import MoviesCard from './components/MoviesCard';
import Navbar from './components/Navbar';
import './App.css';
import axios from 'axios';

const IMG_API = "https://image.tmdb.org/t/p/original/";

export default class App extends Component {

  state = {
    listMovies: [],
  };

  componentDidMount() {
    const self = this;
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=475c85fdf5778f8e64fcaa2bd0c2a2a8&language=en-US&page=1')
      .then(function (response) {
        self.setState({
          listMovies: response.data.results,
        });
      })
      .catch(function (error) {
        alert(error);
      });
  }

  
  render() {
    const { listMovies } = this.state;

    return (
      <div className="bg">
        <Navbar />
        <div>
          <div className="container">
            { listMovies.map((item) => {
                return <MoviesCard src={IMG_API+item.poster_path} title={item.title} subTitle={item.subTitle}/>
            })},
          </div>
        </div>
      </div>
    )
  }
}