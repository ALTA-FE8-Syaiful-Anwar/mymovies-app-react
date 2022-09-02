import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { withRouter } from '../withRouter';
import { Button } from 'react-bootstrap';
import '../style/Detail.css';

class Detail extends Component {

    goBack(){
      this.props.navigate(-1);
    }

  render() {
    return (
      <div>
        <Nav />
        <div className="content">
          <div className="content-image">
            <img src={this.props.location.state.image} />
          </div>
          <div className="content-detail">
            <h2>{this.props.location.state.title}</h2>
            <p>{this.props.location.state.original_state}</p>
            <hr></hr>
            <p>Genre : {this.props.location.state.genre_ids}</p>
            <hr></hr>
            <p>Release : {this.props.location.state.release_date}</p>
            <hr></hr>
            <p>Rating : {this.props.location.state.vite_average}</p>
            <hr></hr>
            <p>Popularity : {this.props.location.state.popularity}</p>
            <hr></hr>
          </div>
          <div className="content-overview">
            <h4>Overview</h4>
            <p>{this.props.location.state.overview}</p>
          </div>
          <div className="content-button">
            <Button onClick={(value) => this.goBack(value)}>Show More</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Detail);