import React, { useEffect, useState } from 'react';
import classes from './Header.module.css';
import utilsClasses from '../utils/utils.module.css';
import HeaderButton from './HeaderButton';



const Header = ({ setIsFavoritesShown, isFavoritesShown }) => {

    const [themeText, setThemeText] = useState('Dark Mode');

    const toggleTheme = (isLight) => {

        const rootStyles = document.documentElement.style;

        if (isLight) {

            rootStyles.setProperty('--bg_default', '#1A1A1A');
            rootStyles.setProperty('--bg_body', '#282828');
            rootStyles.setProperty('--lines-color', '#000000');
            rootStyles.setProperty('--body-text', '#EDEDED');
            setThemeText('Light Mode');
        } else {

            rootStyles.setProperty('--bg_default', '#FFFFFF');
            rootStyles.setProperty('--bg_body', '#F0F9FF');
            rootStyles.setProperty('--lines-color', '#DDDDDD');
            rootStyles.setProperty('--body-text', '#333333');

            setThemeText('Dark Mode');
        }

        localStorage.setItem('theme', isLight ? 'dark' : 'light');

    }


    useEffect(() => {

        const storedTheme = localStorage.getItem('theme');

        if (storedTheme !== null) {

            toggleTheme(storedTheme === 'dark');

        } else {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            toggleTheme(isDark);
        }


    }, []);

    const themeButton = () => {
        toggleTheme(themeText === 'Dark Mode');
    }

    const toggleFavorites = () => {
        setIsFavoritesShown(!isFavoritesShown);
    }


    return <header className={`${classes.header} ${utilsClasses['flex-container']}`}>
        <h3 className={`${classes.logo}`}>
            Web Topics
        </h3>

        <div className={`${classes['header-control']} ${utilsClasses['flex-container']}`}>
            <HeaderButton title={themeText} iconTitle={'moon-outline'} action={themeButton} classes={classes} />
            <HeaderButton title={'Favorites'} iconTitle={'heart-outline'} action={toggleFavorites} classes={classes} />
        </div>
    </header>
}

export default Header;