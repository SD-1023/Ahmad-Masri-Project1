import classes from './Footer.module.css';
import Utils from '../utils/utils.module.css';

const Footer = () => {

    return <footer className={`${Utils['flex-container']} ${Utils.container} ${classes.footer}`}>
        Developed with <ion-icon class="heart-icon" name="heart"></ion-icon> &copy; 2023
    </footer>;
}

export default Footer;