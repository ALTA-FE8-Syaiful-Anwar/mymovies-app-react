import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navi from '../components/Navbar';
import CustomCard from '../components/CustomCard';
import Detail from './Detail';
import Library from './Library';
import '../style/Home.css';
import '../App.css';
import axios from 'axios';

const IMG_API = "https://image.tmdb.org/t/p/original/";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const[movies, setMovies] = useState([]);

const getMovies = async () => {
    await axios
      .get('https://api.themoviedb.org/3/movie/now_playing?api_key=475c85fdf5778f8e64fcaa2bd0c2a2a8&language=en-US&page=1')
      .then((response) => {
        setMovies(
          response.data.results);
        })
      .catch((error) => {z
        alert(error);
      });
  };

  const handleClick = (item) => {
    navigate(`/detail`, {
     state: {
        src: IMG_API+item.poster_path,
        title: item.title,
        original_title: item.original_title,
        genre: item.genre_ids,
        release: item.release_date,
        rating: item.vote_average,
        popularity: item.popularity,
        description: item.overview,
      },
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="bg">
      <Navi />
        <div className="list-movies" style={{display:"flex", flexWrap:"wrap"}}>
          { movies.map((item) => {
            return (<CustomCard 
              src={IMG_API+item.poster_path} 
              title={item.title} 
              release_date={item.release_date}
              onClick={() => handleClick(item)}/>);
          })}
        </div>
    </div>
    );
  };

export default Home;