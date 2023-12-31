import { useEffect, useState } from "react";
import ControlSection from "../components/controls/ControlSection";
import TopicsContainer from "../components/topics/TopicsContainer";
import useFetchData from "../hooks/useFetchData";

const sortOpts = [{ name: 'Author Name', value: 'name' }, { name: 'Topic Title', value: 'topic' }]

const HomePage = () => {

    const [categories, setCategories] = useState([]);
    const [sortValue, setSortValue] = useState('Default');
    const [filterValue, setFilterValue] = useState('Default');
    const [URL, setURL] = useState('https://tap-web-1.herokuapp.com/topics/list');
    const { data: topics, error, loading } = useFetchData(URL);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [currentTopics, setCurrentTopics] = useState([]);

    useEffect(() => {
        if (topics) {
            setCurrentTopics(topics);
        }
    }, [topics]);

    useEffect(() => {

        if (topics && topics.length && isFirstLoad) {
            setCategories([...new Set(topics.map(topic => topic.category))]);
            setIsFirstLoad(false);
        }

    }, [topics, isFirstLoad]);


    useEffect(() => {
        if (topics) {
            let tempTopics = [...topics];
            if (filterValue !== 'Default' && !loading) {

                tempTopics = tempTopics.filter(topic => topic.category.includes(filterValue));
            }

            if (sortValue !== 'Default' && !loading) {
                tempTopics.sort((a, b) => {

                    const aValue = a[sortValue].toLowerCase();
                    const bValue = b[sortValue].toLowerCase();

                    if (aValue < bValue) return -1;
                    if (aValue > bValue) return 1;
                    return 0;
                });

            }
            setCurrentTopics(tempTopics)
        }
    }, [topics, sortValue, filterValue, loading]);


    return <>
        <ControlSection categories={categories} sorts={sortOpts} setURL={setURL}
            setSortValue={setSortValue} setFilterValue={setFilterValue} />
        <TopicsContainer topics={currentTopics} error={error} loading={loading} />
    </>
}

export default HomePage;