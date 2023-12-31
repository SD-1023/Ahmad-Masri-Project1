import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import DetailLeftSection from "../../components/detailLeftSection/DetailLeftSection";
import DetailRightSection from "../../components/detailRightSection/DetailRightSection";
import TempContent from "../../components/tempContent/TempContent";
import classes from './DetailsPage.module.css';


const DetailsPage = () => {

    const { id } = useParams();
    const { data: topic, loading, error } = useFetchData('https://tap-web-1.herokuapp.com/topics/details/' + id);


    console.log(topic);
    return <div className={classes.details}>

        {error && <TempContent content={'Something went wrong!'} style={{ color: 'red',margin: '50px'}}/>}
        {loading && !error && <TempContent content={'Loading...'} style={{margin: '50px'}} />}

        {topic && !error && !loading && <DetailLeftSection topic={topic} />}
        {topic && !error && !loading && <DetailRightSection topic={topic} />}
    </div>
}

export default DetailsPage;