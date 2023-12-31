import { useRef } from "react";

const debounceInput = (func) => {

    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, 300);
    };
}

const CustomSearch = ({ classes, utils, iconTitle, placeholder, setURL }) => {

    const inputRef = useRef(null);

    const changeURL = () => {
        setURL('https://tap-web-1.herokuapp.com/topics/list?phrase=' + inputRef.current.value);
    }

    return <div className={`${classes.search} ${utils['flex-container']}`}>
        <ion-icon class={`${classes[iconTitle]}`} name={iconTitle}></ion-icon>
        <input ref={inputRef} className={classes['search-input']} type="text" placeholder={placeholder}
            onChange={debounceInput(changeURL)} />
    </div>;
}

export default CustomSearch;