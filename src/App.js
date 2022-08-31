import React, { Component } from 'react';
import MoviesCard from './components/MoviesCard';
import Navbar from './components/Navbar';
import './App.css';

export default class App extends Component {
  
  render() {
    const listMovies = [
      {
        image: "https://image.tmdb.org/t/p/w500//rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
        title: "Dragon Ball Super",
        subTitle: "Release: 2022",
      },
      {
        image: "https://image.tmdb.org/t/p/w500//pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
        title: "Thor: Love and Thunder",
        subTitle: "Release: 2022",
      },
      {
        image: "https://image.tmdb.org/t/p/w500//6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
        title: "Sonic The Hedgehog",
        subTitle: "Release: 2020",
      },
      {
        image: "https://image.tmdb.org/t/p/w500//8Kce1utfytAG5m1PbtVoDzmDZJH.jpg",
        title: "A Day To Die",
        subTitle: "Release: 2022",
      },
      {
        image: "https://image.tmdb.org/t/p/w500//wDed9MJgcRNs34ncGuegjr7ik42.jpg",
        title: "One Piece Film: Red",
        subTitle: "Release: 2022",
      },
      {
        image: "https://image.tmdb.org/t/p/w500//bv9dy8mnwftdY2j6gG39gCfSFpV.jpg",
        title: "Blacklight",
        subTitle: "Release: 2022",
      },
      {
        image: "https://image.tmdb.org/t/p/w500//r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
        title: "DC League of Super-Pets",
        subTitle: "Release: 2022",
      },
      {
        image: "https://image.tmdb.org/t/p/w500//qvqyDj34Uivokf4qIvK4bH0m0qF.jpg",
        title: "Last Seen Alive",
        subTitle: "Release: 2022",
      },
    ]

    return (
      <div className="bg">
        <Navbar />
        <div>
          <div className="container">
            { listMovies.map((item) => {
                return <MoviesCard src={item.image} title={item.title} subTitle={item.subTitle}/>
            })},
          </div>
        </div>
      </div>
    )
  }
}