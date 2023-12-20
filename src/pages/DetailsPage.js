import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailContainer from "../components/detailContainer/DetailContainer";

const DetailsPage = () => {

    const { id } = useParams();
    const [topic, setTopic] = useState({});

    useEffect(() => {

        const fetchTopic = async () => {
            const res = await fetch('https://tap-web-1.herokuapp.com/topics/details/' + id);
            setTopic(await res.json());
        }
        fetchTopic();
    }, []);

    return <DetailContainer>
        
    </DetailContainer>
}

export default DetailsPage;