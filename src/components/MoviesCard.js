import React, { Component } from 'react';
import "../../src/style/MoviesCard.css"

export default class MoviesCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="containerCard">
          <img className="image" src={this.props.src} alt='' />
          <p className="title">{this.props.title}</p>
          <p className="subTitle">{this.props.subTitle}</p>
        </div>
      </div>
    )
  }
}
