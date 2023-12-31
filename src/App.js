import { useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Favorites from './components/favorites/Favorites';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import useFavorites from './hooks/useFavorites';

function App() {

  const { isShown, toggleFavoritesDisplay } = useFavorites();

  return (
    <div>
      <Header toggleFavoritesDisplay={toggleFavoritesDisplay} />
      <Banner />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/detail.html/:id" element={<DetailsPage />} />
      </Routes>
      <Footer />
      {isShown && <Favorites />}
    </div>
  );
}

export default App;
