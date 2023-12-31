
import { useContext, useState } from 'react';
import classes from './DetailRightSection.module.css';
import { FavoritesContext } from '../../contexts/FavoritesContext';

const DetailRightSection = ({ topic }) => {

    const {checkTopicExistence, addToFavorites, removeFromFavorites} = useContext(FavoritesContext);
    const [isAddedToFavorites, setIsAddedToFavorites] = useState(checkTopicExistence(topic.id));

    const onButtonClicked = () => {

        if(isAddedToFavorites){
            removeFromFavorites(topic.id);
        }else {
            addToFavorites(topic);
        }
        setIsAddedToFavorites(state => !state);
    }


    return <div class={classes["right-section"]}>

        <img className={classes.img} src={require(`../../../public/Logos/${topic.image}`)} alt={topic.topic} />

        <div className={classes["card-body"]}>

            <h5 className={classes.title}>
                {topic.topic} by <a href="/">{topic.name}</a>
            </h5>
            <div className={classes["add-to-favorites"]}>
                <h5>
                    Interested about this topic?
                </h5>
                <button onClick={onButtonClicked}>
                    {isAddedToFavorites ? 'Remove from favorites' : 'Add to Favorites'}
                    <ion-icon className={classes.icon} name="heart-outline"></ion-icon>
                </button>
                <h5 className={classes.credits}>
                    Unlimited Credits
                </h5>
            </div>
        </div>

    </div>;

}


export default DetailRightSection;