import { useEffect, useState } from "react";

const useThemeToggle = () => {

    const [themeText, setThemeText] = useState('Dark Mode');

    const toggleTheme = (isLight) => {
        try {

            const rootStyles = document.documentElement.style;

            rootStyles.setProperty('--bg_default', isLight ? '#1A1A1A' : '#FFFFFF');
            rootStyles.setProperty('--bg_body', isLight ? '#282828' : '#F0F9FF');
            rootStyles.setProperty('--lines-color', isLight ? '#000000' : '#DDDDDD');
            rootStyles.setProperty('--body-text', isLight ? '#EDEDED' : '#333333');

            setThemeText(isLight ? 'Light Mode' : 'Dark Mode');
            localStorage.setItem('theme', isLight ? 'dark' : 'light');

        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {

        try {

            const storedTheme = localStorage.getItem('theme');

            if (storedTheme !== null) {

                toggleTheme(storedTheme === 'dark');
            } else {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                toggleTheme(isDark);
            }

        } catch (e) {
            console.log(e);
        }

    }, []);

    return {
        themeText,
        toggleTheme
    }

}

export default useThemeToggle;