import classes from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({ topic, isFav }) => {


    return <div className={classes.card} style={{ height: isFav ? '100px' : '' }}>
        <Link to={`./detail.html/${topic.id}`}>
            <div>
                <img className={classes['card-img']} style={{ height: isFav ? '45px' : '113px' }} src={require(`../../Logos/${topic.image}`)} alt={topic.topic} />
            </div>

            <div className={classes["card-body"]}>
                {!isFav && <h4 className={classes.type}>

                    {topic.category}

                </h4>
                }
                <p className={`${classes['card-title']} ${isFav ? classes['small-car-title'] : classes['large-card-title']}`}>
                    {topic.topic}
                </p>
                <div className={classes.rating}>
                    <ion-icon name="star" for="star5"></ion-icon>
                    <ion-icon name="star" for="star4"></ion-icon>
                    <ion-icon name="star" for="star3"></ion-icon>
                    <ion-icon name="star" for="star2"></ion-icon>
                    <ion-icon name="star" for="star1"></ion-icon>
                </div>
                {!isFav && <h6 className={classes.author}>
                    Author: {topic.name}
                </h6>
                }
            </div>
        </Link>
    </div>;
}


export default Card;