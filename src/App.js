import { useState } from 'react';
import './App.css';
import Brand from './components/brand/Brand';
import ControlSection from './components/controls/ControlSection';
import Header from './components/header/Header';
import ItemsCount from './components/itemsCount/ItemsCount';
import TopicsContainer from './components/topics/TopicsContainer';
import Footer from './components/footer/Footer';
import Favorites from './components/favorites/Favorites';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
function App() {

  const [isFavoritesShown, setIsFavoritesShown] = useState(false);


  return (
    <div>
      <Header setIsFavoritesShown={setIsFavoritesShown} isFavoritesShown={isFavoritesShown} />
      <Brand />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/detail.html/:id" element={<DetailsPage />} />
      </Routes>
      <Footer />
      {isFavoritesShown && <Favorites />}
    </div>
  );
}

export default App;
