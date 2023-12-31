import { useEffect, useState } from "react";

const useFavorites = () => {

    const [isShown, setIsShown] = useState(false);
    const [favorites, setFavorites] = useState();

    useEffect(() => {

        try {

            setFavorites(JSON.parse(localStorage.getItem('favs')) || []);

        } catch (e) {
            console.log(e);
        }

    }, []);


    const toggleFavoritesDisplay = () => {
        setIsShown(isShown => !isShown);
    }


    return {
        isShown,
        favorites,
        toggleFavoritesDisplay, 
    }
}

export default useFavorites;