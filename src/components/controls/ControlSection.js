import classes from './ControlSection.module.css';
import utils from '../utils/utils.module.css';
import CustomSelect from '../customSelect/CustomSelect';
import CustomSearch from '../customSearch/CustomSearch';

const ControlSection = ({ categories, sorts, setSortValue, setFilterValue, setURL }) => {


    return <div className={`${classes.controls} ${utils.container} ${utils['flex-container']}`}>
        <CustomSearch classes={classes} utils={utils} iconTitle={"search-outline"} placeholder={"Search the website..."}
            setURL={setURL} />
        <CustomSelect classes={classes} label={'Sort'} opts={sorts} action={setSortValue} />
        <CustomSelect classes={classes} label={'Filter'} opts={categories} action={setFilterValue} />
    </div>;
}

export default ControlSection;