import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import Navi from '../components/Navbar';
import favoriteContext from '../context/FavoriteContext';
import { Button, Container } from 'react-bootstrap';
import '../style/Favorite.css';

const Favorite = () => {
    const {favorite} = useContext(favoriteContext);
    const IMG_API = "https://image.tmdb.org/t/p/original/";
    const navigate = useNavigate();
    console.log(favorite);

    const goBack = () => {
        navigate(-1);
    }

  return (
    <div>
        <div>
            <Navi />
            <div>
                <h1>My Favorite Movie</h1>
                <div>
                    {favorite.map((item) => (
                        <div>
                            <img className='image' src={IMG_API+item.item.poster_path} />
                            <div>
                                <h6>{item.item.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>
                <Container>
                    <Button onClick={(value) => goBack(value)}>Back</Button>
                </Container>
            </div>
        </div>
    </div>
  )
}

export default Favorite;