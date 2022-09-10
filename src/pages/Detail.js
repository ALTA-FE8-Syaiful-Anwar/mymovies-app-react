import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navi from '../components/Navbar';
import { Button } from 'react-bootstrap';
import '../style/Detail.css';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    }

    return (
      <div>
        <Navi />
        <div className="content">
          <div className="content-image">
            <img src={location.state.src} />
          </div>
          <div className="content-detail">
            <h2>{location.state.title}</h2>
            <p>{location.state.original_title}</p>
            <hr></hr>
            <p>Genre : {location.state.genre}</p>
            <hr></hr>
            <p>Release : {location.state.release}</p>
            <hr></hr>
            <p>Rating : {location.state.rating}</p>
            <hr></hr>
            <p>Popularity : {location.state.popularity}</p>
            <hr></hr>
            <h4>Overview</h4>
            <p>{location.state.description}</p>
            <hr></hr>
            <Button onClick={(value) => goBack(value)}>Show More</Button>
          </div>
        </div>
      </div>
    );
};

export default Detail;