import Rating from '../rating/Rating';
import classes from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({ topic, isSmallCard }) => {


    return <div className={classes.card} style={{ height: isSmallCard ? '100px' : '' }}>
        <Link to={`./detail.html/${topic.id}`}>
            <div>
                <img className={classes['card-img']} style={{ height: isSmallCard ? '45px' : '113px' }} src={require(`../../../public/Logos/${topic.image}`)} alt={topic.topic} />
            </div>

            <div className={classes["card-body"]}>
                {!isSmallCard && <h4 className={classes.type}>

                    {topic.category}

                </h4>
                }
                <p className={`${classes['card-title']} ${isSmallCard ? classes['small-card-title'] : classes['large-card-title']}`}>
                    {topic.topic}
                </p>
                <Rating rate={topic.rating} style={{marginBottom: '10px', fontSize: '14px'}}/>
                {/* <div className={classes.rating}>
                    <ion-icon name="star" for="star5"></ion-icon>
                    <ion-icon name="star" for="star4"></ion-icon>
                    <ion-icon name="star" for="star3"></ion-icon>
                    <ion-icon name="star" for="star2"></ion-icon>
                    <ion-icon name="star" for="star1"></ion-icon>
                </div> */}
                {!isSmallCard && <h6 className={classes.author}>
                    Author: {topic.name}
                </h6>
                }
            </div>
        </Link>
    </div>;
}


export default Card;