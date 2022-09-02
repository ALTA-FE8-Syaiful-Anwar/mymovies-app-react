import React, { Component } from 'react';
import Navi from '../components/Navbar';
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
        <Navi />
        <div className="content">
          <div className="content-image">
            <img src={this.props.location.state.src} />
          </div>
          <div className="content-detail">
            <h2>{this.props.location.state.title}</h2>
            <p>{this.props.location.state.original_title}</p>
            <hr></hr>
            <p>Genre : {this.props.location.state.genre}</p>
            <hr></hr>
            <p>Release : {this.props.location.state.release}</p>
            <hr></hr>
            <p>Rating : {this.props.location.state.rating}</p>
            <hr></hr>
            <p>Popularity : {this.props.location.state.popularity}</p>
            <hr></hr>
            <h4>Overview</h4>
            <p>{this.props.location.state.description}</p>
            <hr></hr>
            <Button onClick={(value) => this.goBack(value)}>Show More</Button>
          </div>
        </div>
        <div className="content-overview">
            
          </div>
      </div>
    );
  }
}

export default withRouter(Detail);