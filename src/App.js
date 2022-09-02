import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import Detail from './pages/Detail';
import CustomCard from './components/CustomCard';
import './App.css';
import './style/Home.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/library" element={<Library />} />
          <Route exact path="/Detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    );
  }
}