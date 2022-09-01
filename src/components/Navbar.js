import React, { Component } from 'react';
import '../style/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';

export default class Nav extends Component {
  render() {
    return (
      <Navbar className="navbar" fixed="top">
          <div className="nav">
              <h1 className="home">MovieKece</h1>
              <div className="list-nav">
                  <ul className="item-nav">
                      <li>Home</li>
                      <li>Your Library</li>
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
