import classes from './Brand.module.css';
import utilsClasses from '../utils/utils.module.css';

const Brand = () => {

    return <div className={`${classes.brand} ${utilsClasses['flex-container']}`}>
        <div className={classes['center-text']}>
            <h3>Welcome to our website!</h3>
            <p>We have a new design that's fresh, modern, and easy to use.</p>
        </div>
    </div>;
}


export default Brand;