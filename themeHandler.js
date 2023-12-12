
const toggleTheme = (isLight) => {

    const rootStyles = document.documentElement.style;

    if (isLight) {

        rootStyles.setProperty('--bg_default', '#1A1A1A');
        rootStyles.setProperty('--bg_body', '#282828');
        rootStyles.setProperty('--lines-color', '#000000');
        rootStyles.setProperty('--body-text', '#EDEDED');

        document.getElementsByClassName('button-text')[0].innerHTML = 'Light Mode';

    } else {

        rootStyles.setProperty('--bg_default', '#FFFFFF');
        rootStyles.setProperty('--bg_body', '#F0F9FF');
        rootStyles.setProperty('--lines-color', '#DDDDDD');
        rootStyles.setProperty('--body-text', '#333333');

        document.getElementsByClassName('button-text')[0].innerHTML = 'Dark Mode';
    }

    localStorage.setItem('theme', isLight ? 'dark' : 'light');

}

const toggleThemeByButton = () => {

    const toggleModeButton = document.getElementsByClassName('button-text')[0];

    if (toggleModeButton.innerText === 'Dark Mode') {
        toggleTheme(true);
    } else {
        toggleTheme(false);
    }
}


const storedTheme = localStorage.getItem('theme');

if (storedTheme !== null) {

    toggleTheme(storedTheme === 'dark');

} else {

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggleTheme(isDark);
}

