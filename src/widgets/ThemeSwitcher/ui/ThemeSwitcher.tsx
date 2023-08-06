
import cls from './ThemeSwitcher.module.scss'
import React from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
interface ThemeSwitcherProps {
    className?: string,

}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme()


    return (
        <button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            SWITCH THEME
        </button>
    )
};

