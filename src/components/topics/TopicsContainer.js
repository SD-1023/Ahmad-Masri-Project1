
import Utils from '../utils/utils.module.css'
import classes from './TopicsContainer.module.css'
import Card from '../card/Card';
import ItemsCount from '../itemsCount/ItemsCount';
import TempContent from '../tempContent/TempContent';

const TopicsContainer = ({ topics, error, loading }) => {


    return <>
        <ItemsCount topicsCount={topics.length} />

        <div className={`${Utils.container} ${classes.items}`}>

            {error && <TempContent content={'Something went wrong!'} style={{ color: 'red' }} />}
            {loading && !error && <TempContent content={'Loading...'} />}

            {topics && topics.length < 1 && !error && !loading && <TempContent content={'No topics found!'} />}

            {topics && !error && !loading && topics.map((topic) => {
                return <Card isSmallCard={false} topic={topic} key={topic.id} />;
            })}
        </div>
    </>;


}

export default TopicsContainer;