import React from 'react';
import classes from './Header.module.css';
import utilsClasses from '../utils/utils.module.css';
import Button from '../Button/Button';
import useThemeToggle from '../../hooks/useThemeToggle';
import UseFavorites from '../../hooks/useFavorites';



const Header = ({toggleFavoritesDisplay}) => {

    const { themeText, toggleTheme } = useThemeToggle();

    const themeButton = () => {
        toggleTheme(themeText === 'Dark Mode');
    }

    return <header className={`${classes.header} ${utilsClasses['flex-container']}`}>
        <h3 className={`${classes.logo}`}>
            Web Topics
        </h3>

        <div className={`${classes['header-control']} ${utilsClasses['flex-container']}`}>
            <Button title={themeText} iconTitle={'moon-outline'} action={themeButton} classes={classes} />
            <Button title={'Favorites'} iconTitle={'heart-outline'} action={toggleFavoritesDisplay} classes={classes} />
        </div>
    </header>
}

export default Header;