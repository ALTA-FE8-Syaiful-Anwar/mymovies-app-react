import React, { useContext } from 'react';
import { Card, Button, } from 'react-bootstrap';
import '../style/Home.css';
import '../style/CustomCard.css';


const CustomCard = (props, onClickDetail, onClickFavorite) => {

    return (
      <Card className="containerCard" style={{ width: '18rem' }}>
        <Card.Img className="image" src={props.src} alt='' />
        <Button className="button-favorite" onClick={props.onClickFavorite}>Add to Favorite</Button>
  
        <Card.Body>
          <Card.Title className="title">{props.title}</Card.Title>
          <Card.Text className="subTitle">
          Release: {props.release_date}
          </Card.Text>
        </Card.Body>
        <Button className="button-detail" onClick={props.onClickDetail}>Detail</Button>
      </Card>
    );
  };

export default CustomCard;
