import { useEffect, useState } from 'react';
import Utils from '../utils/utils.module.css'
import classes from './TopicsContainer.module.css'
import Card from '../card/Card';

const TopicsContainer = ({setTopicsCount, setCategories}) => {

    const [topics, setTopics] = useState([]);

    useEffect(() => {

        const fetchTopics = async () => {
            const res = await fetch('https://tap-web-1.herokuapp.com/topics/list');
            setTopics(await res.json());
        }

        fetchTopics();
    }, []);

    useEffect(() => {
        setTopicsCount(topics.length);
        setCategories([...new Set(topics.map(topic => topic.category))]);
    }, [topics]);

    return <div className={`${Utils.container} ${classes.items}`}>

        {topics.map((topic, i) => {
            return <Card isFav={false} topic={topic} key={i}/>;
        })}
    </div>;


}

export default TopicsContainer;