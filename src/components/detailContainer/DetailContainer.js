import classes from './DetailContainer.module.css'

const DetailContainer = ({ children }) => {

    return <div className={classes.details}>
        {children}
    </div>
}

export default DetailContainer;