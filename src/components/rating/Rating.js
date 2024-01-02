import React, { useState, useEffect } from 'react';
import classes from './Rating.module.css'

const Rating = ({ rate, style }) => {
    const [stars, setStars] = useState(0);

    useEffect(() => {
        setStars(Math.floor(rate));
    }, [rate]);

    return (
        <div className={classes["star-rating"]} style={style}>
            {[...Array(5)].map((_, index) => (
                <ion-icon name={`star${index < stars ? '' : '-outline'}`} key={index} style={{color: '#e19303'}}></ion-icon>
            ))}
        </div>
    );
};

export default Rating;
