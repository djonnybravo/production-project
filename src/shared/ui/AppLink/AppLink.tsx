import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import React, {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
interface AppLinkProps extends LinkProps{
    className?: string,

}
export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, ...restProps} = props
    return (
        <Link
            className={classNames(cls.AppLink, {}, [className])}
            to={to}
            {...restProps}
        >
            {children}
        </Link>
    );
};

