import UseFavorites from '../../hooks/useFavorites';
import Card from '../card/Card';
import classes from './Favorites.module.css';

const Favorites = () => {

    const topic = {
        category: "Web Development Languages",
        id: 1,
        image: "html.png",
        name: "Sarah Smith",
        rating: 4.1,
        topic: "HTML"
    }

    return <div className={classes.favs} id="favs">
        <h4 className={classes["favs-title"]}>My Favourite Topics</h4>
        <div className={classes["fav-items"]}>
            <Card isSmallCard={true} topic={topic} />
        </div>
    </div>;
}

export default Favorites;