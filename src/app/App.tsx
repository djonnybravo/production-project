import React from 'react';
import './styles/index.scss'
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <div>
                <button onClick={toggleTheme}>SWITCH THEME</button>
            </div>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;