import Rating from '../rating/Rating';
import classes from './DetailLeftSection.module.css';

const DetailLeftSection = ({ topic }) => {

    return <>
        <div className={classes["left-section"]}>
            <div className={classes.about}>
                <h5 class={classes.type}>
                    {topic.category}
                </h5>
                <h4 class={classes.title}>
                    {topic.topic}
                </h4>
                <Rating rate={topic.rating} style={{marginBottom: '10px'}}/>

                <div class={classes.description}>
                    {topic.description}
                </div>
            </div>
            <div class={classes["sub-topics"]}>
                <h3 class={classes["sub-topics-title"]}>
                    {topic.topic} Sub Topics
                </h3>

                {topic.subtopics.map((t) => <p className={classes.topic}>
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                    {t}
                </p>)}


            </div>

        </div>

    </>;
}


export default DetailLeftSection;