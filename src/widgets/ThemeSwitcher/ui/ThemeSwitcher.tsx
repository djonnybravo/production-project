import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightThemeIcon from 'shared/assets/icons/ThemeSwitcherIcons/theme-light.svg';
import DarkThemeIcon from 'shared/assets/icons/ThemeSwitcherIcons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string,

}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
        >

            {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon /> }
        </Button>
    );
};
