import utilsClasses from '../utils/utils.module.css';

const HeaderButton = ({title, iconTitle, classes, action}) => {

    return <button className={`${utilsClasses['flex-container']}`} onClick={action}>
        <ion-icon name={iconTitle}></ion-icon>
        <span className={` ${classes['button-text']}`}>
            {title}
        </span>
    </button>;
}

export default HeaderButton;