
import classes from './DetailRightSection.module.css';

const DetailRightSection = ({ topic }) => {

    return <div class={classes["right-section"]}>

        <img src={require(`../../../public/Logos/${topic.image}`)} alt={topic.topic} />

        <div className={classes["card-body"]}>

            <h5 className={classes.title}>
                {topic.topic} by <a href="#">{topic.name}</a>
            </h5>
            <div className={classes["add-to-favorites"]}>
                <h5>
                    Interested about this topic?
                </h5>
                <button>
                    Add to Favourites
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