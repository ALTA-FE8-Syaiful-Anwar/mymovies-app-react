import React, { Component } from 'react';
import { withRouter } from '../withRouter';
import { Nav, Navbar } from 'react-bootstrap';
import '../style/Navbar.css';

class Navi extends Component {
  render() {
    return (
      <Navbar className="navbar" fixed="top">
          <div className="nav">
              <h1 className="home">MovieKece</h1>
              <div className="list-nav">
                  <ul className="item-nav">
                      <li href="#Home.js">Home</li>
                      <li href="Library.js">Your Library</li>
                  </ul>
              </div>
              <div className="box">
                <div className="search">
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input type="search" id="search" placeholder="Search..." />
                </div>
              </div>
          </div>
      </Navbar>
    )
  }
}

export default withRouter(Navi);