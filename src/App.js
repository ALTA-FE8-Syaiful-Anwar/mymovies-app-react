import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Favorite from './pages/Favorite';
import CustomCard from './components/CustomCard';
import Navi from './components/Navbar';
import './App.css';
import './style/Home.css';
import { FavoriteProvider } from './context/FavoriteContext';

const App = () => {
  return (
    <FavoriteProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  );
};

export default App;