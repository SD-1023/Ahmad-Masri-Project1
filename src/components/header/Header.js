import React, { useContext } from 'react';
import classes from './Header.module.css';
import utilsClasses from '../utils/utils.module.css';
import Button from '../Button/Button';
import useThemeToggle from '../../hooks/useThemeToggle';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { Link } from 'react-router-dom';



const Header = () => {

    const { themeText, toggleTheme } = useThemeToggle();
    const {toggleFavoritesStatus} = useContext(FavoritesContext);

    const themeButton = () => {
        toggleTheme(themeText === 'Dark Mode');
    }

    return <header className={`${classes.header} ${utilsClasses['flex-container']}`}>
        <Link to='/' className={`${classes.logo}`}>
            Web Topics
        </Link>

        <div className={`${classes['header-control']} ${utilsClasses['flex-container']}`}>
            <Button title={themeText} iconTitle={'moon-outline'} action={themeButton} classes={classes} />
            <Button title={'Favorites'} iconTitle={'heart-outline'} action={toggleFavoritesStatus} classes={classes} />
        </div>
    </header>
}

export default Header;