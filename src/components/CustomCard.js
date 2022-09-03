import React from 'react';
import { Card, Button, } from 'react-bootstrap';
import '../style/Home.css';
import '../style/CustomCard.css';


const CustomCard = (props) => {

    return (
      <Card className="containerCard" style={{ width: '18rem' }}>
        <Card.Img className="image" src={props.src} alt='' />
        <Button className="button-library" onClick={props.onClick}>Add to Library</Button>
  
        <Card.Body>
          <Card.Title className="title">{props.title}</Card.Title>
          <Card.Text className="subTitle">
          Release: {props.release_date}
          </Card.Text>
        </Card.Body>
        <Button className="button-detail" onClick={props.onClick}>Detail</Button>
      </Card>
    );
  };

export default CustomCard;
