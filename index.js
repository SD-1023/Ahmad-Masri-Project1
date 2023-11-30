const favorites = () => {

    const favDiv = document.getElementById('favs');
    const currDisplay = favDiv.style.display;
    favDiv.style.display = currDisplay === 'none' ? 'block' : 'none';

}

const toggleTheme = () => {

    const rootStyles = document.documentElement.style;
    const isLight = localStorage.getItem('theme') === 'light';

    if (isLight) {

        rootStyles.setProperty('--bg_default', '#1A1A1A');
        rootStyles.setProperty('--bg_body', '#282828');
        rootStyles.setProperty('--lines-color', '#000000');
        rootStyles.setProperty('--body-text', '#EDEDED');
        document.getElementsByClassName('button-text')[0].innerHTML = 'Light Mode';
        console.log(document.getElementsByClassName('button-text')[0])
    } else {

        rootStyles.setProperty('--bg_default', '#FFFFFF');
        rootStyles.setProperty('--bg_body', '#F0F9FF');
        rootStyles.setProperty('--lines-color', '#DDDDDD');
        rootStyles.setProperty('--body-text', '#333333');
        document.getElementsByClassName('button-text')[0].innerHTML = 'Dark Mode';
    }

    console.log(localStorage.getItem('theme'));
    localStorage.setItem('theme', isLight ? 'dark' : 'light');

}

(function () {
    const isDark = localStorage.getItem('theme') === 'dark';

    localStorage.setItem('theme', isDark ? 'light' : 'dark');

    toggleTheme();


})();

// --brand-primary #0768AC
// --brand-secondary #03C180
// --bg_default #FFFFFF
// --bg_body #F0F9FF
// --lines-color #DDDDDD
// --body-text #333333

// --heart-color #DC143C

//////////////////////


// --brand-primary #0768AC
// --brand-secondary #03C180
// --bg_default #1A1A1A
// --bg_body #282828
// --lines-color #000000
// --body-text #EDEDED

// --heart-color #DC143C
