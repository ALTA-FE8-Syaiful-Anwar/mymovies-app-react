import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library';
import Detail from './pages/Detail';
import CustomCard from './components/CustomCard';
import Navi from './components/Navbar';
import './App.css';
import './style/Home.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;