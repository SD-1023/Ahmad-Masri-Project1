import { useState } from "react";
import ControlSection from "../components/controls/ControlSection";
import ItemsCount from "../components/itemsCount/ItemsCount";
import TopicsContainer from "../components/topics/TopicsContainer";

const HomePage = () => {
    const [topicsCount, setTopicsCount] = useState(0);
    const [categories, setCategories] = useState([]);


    return <>
        <ControlSection categories={categories} />
        <ItemsCount topicsCount={topicsCount} />
        <TopicsContainer setTopicsCount={setTopicsCount} setCategories={setCategories} />
    </>
}

export default HomePage;