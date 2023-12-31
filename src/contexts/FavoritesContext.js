import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();


const FavoritesProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);
    const [isFavoritesShown, setIsFavoritesShown] = useState(false);

    useEffect(() => {
        try {

            setFavorites(JSON.parse(localStorage.getItem('favs')) || []);
        } catch (e) {
            console.log(e);
        }
    }, []);

    const toggleFavoritesStatus = () => {
        setIsFavoritesShown(s => !s);
    }
    const checkTopicExistence = (id) => {

        return favorites.some((f) => f.id === id);
    }
    const modifyFavoritesStorage = (topics) => {
        try {
            localStorage.setItem('favs', JSON.stringify(topics));

        } catch (e) {
            console.log(e);
        }
    }
    const addToFavorites = (topic) => {
        const temp = [...favorites, topic];
        setFavorites(temp);
        modifyFavoritesStorage(temp);
    }
    const removeFromFavorites = (id) => {

        let temp = [...favorites];

        temp = temp.filter(f => f.id !== id);
        setFavorites(temp);

        modifyFavoritesStorage(temp);

    }

    return <FavoritesContext.Provider value={{
        favorites, checkTopicExistence, addToFavorites,
        removeFromFavorites, isFavoritesShown, toggleFavoritesStatus
    }}>

        {children}
    </FavoritesContext.Provider>

}

export default FavoritesProvider;