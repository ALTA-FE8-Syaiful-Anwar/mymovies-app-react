import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navi from '../components/Navbar';
import CustomCard from '../components/CustomCard';
import Favorite from '../pages/Favorite';
import '../style/Home.css';
import '../App.css';
import axios from 'axios';

const IMG_API = "https://image.tmdb.org/t/p/original/";
const movieApi = "https://api.themoviedb.org/3/movie/now_playing?api_key=475c85fdf5778f8e64fcaa2bd0c2a2a8&language=en-US&page=1";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {addFavorite} = useContext(Favorite);
  const[movies, setMovies] = useState([]);

const getMovies = async () => {
    await axios
      .get(movieApi)
      .then((response) => {
        setMovies(
          response.data.results);
        })
      .catch((error) => {alert(error);
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
              onClickFavorite={() => handleClickFavorite(item)}
              src={IMG_API+item.poster_path} 
              title={item.title} 
              release_date={item.release_date}
              onClickDetail={() => handleClickDetail(item)}/>);
          })}
        </div>
    </div>
    );
  };

export default Home;