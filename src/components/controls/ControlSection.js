import classes from './ControlSection.module.css';
import utils from '../utils/utils.module.css';
import CustomSelect from '../customSelect/CustomSelect';

const ControlSection = ({categories}) => {

    const sorts = ['Topic Title', 'Author Name']

    return <div  className={`${classes.controls} ${utils.container} ${utils['flex-container']}`}>

        <div className={`${classes.search} ${utils['flex-container']}`}>
            <ion-icon class={`${classes['search-outline']}`} name="search-outline"></ion-icon>
            <input className={classes['search-input']} type="text" placeholder="Search the website..."/>
        </div>

        <CustomSelect classes={classes} label={'Sort'} opts={sorts}/>
        <CustomSelect classes={classes} label={'Filter'} opts={categories}/>

     
    </div>;
}

export default ControlSection;