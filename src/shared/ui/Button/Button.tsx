import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'ouline'

}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme? : ThemeButton,

}
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...restProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...restProps}

        >
            {children}
        </button>
    );
};
