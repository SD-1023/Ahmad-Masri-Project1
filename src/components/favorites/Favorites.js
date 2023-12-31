import { useContext } from 'react';
import Card from '../card/Card';
import classes from './Favorites.module.css';
import { FavoritesContext } from '../../contexts/FavoritesContext';

const Favorites = () => {

    const {favorites} = useContext(FavoritesContext);

return <div className={classes.favs} id="favs">
        <h4 className={classes["favs-title"]}>My Favourite Topics</h4>
        <div className={classes["fav-items"]}>
            {favorites.map(topic => <Card isSmallCard={true} topic={topic} />)}
        </div>
    </div>;
}

export default Favorites;