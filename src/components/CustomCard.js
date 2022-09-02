import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../style/Home.css';
import '../style/CustomCard.css';


export default class CustomCard extends Component {
  render() {
    return (
        <div className="containerCard">
          <img className="image" src={this.props.src} alt='' />
          <p className="title">{this.props.title}</p>
          <p className="subTitle">Release: {this.props.release_date}</p>
          <div className="button-library">
            <Button onClick={this.props.onClick}>Add to Library</Button>
          </div>
          <div className="button-detail">
            <Button onClick={this.props.onClick}>Detail</Button>
          </div>
        </div>
    );
  }
}
