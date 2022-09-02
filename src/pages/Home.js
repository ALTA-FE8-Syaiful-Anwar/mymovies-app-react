import React, { Component } from 'react';
import { withRouter } from '../withRouter';
import Navi from '../components/Navbar';
import CustomCard from '../components/CustomCard';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/Home.css';
import '../App.css';
import axios from 'axios';

const IMG_API = "https://image.tmdb.org/t/p/original/";

class Home extends Component {

  state = {
    listMovies: [],
  };

  componentDidMount() {
    const self = this;
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=475c85fdf5778f8e64fcaa2bd0c2a2a8&language=en-US&page=1')
      .then(function (response) {
        self.setState({
          listMovies: response.data.results,
        });
      })
      .catch(function (error) {
        alert(error);
      });
  }

  handleDetail (item) {
    this.props.navigate("/Detail", {
      state: {
        src: IMG_API+item.poster_path,
        title: item.title,
        original_title: item.original_title,
        genre: item.genre_ids,
        release: release_date,
        rating: item.vite_average,
        popularity: item.popularity,
        description: item.overview
      },
    });
  }

  render() {
    const { listMovies } = this.state;
    return (
      <div className="bg">
        <Navi />
          <div className="list-movies">
            { listMovies.map((item) => {
                return (<CustomCard 
                src={IMG_API+item.poster_path} 
                title={item.title} 
                release_date={item.release_date}
                onClick={() => this.handleDetail(item)}/>);
            })}
           </div>
        </div>
    );
  }
}

export default withRouter (Home);