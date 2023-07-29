import React from 'react';
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";

import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div className={'App'}>
            <div>
              <Link to={'/'}>Главная</Link>
              <Link to={'/about'}>О сайте</Link>
            </div>
            <Routes>
                <Route path={"/"} element={<MainPageAsync/>} />
                <Route path={"/about"} element={<AboutPageAsync/>} />
            </Routes>
        </div>
    );
};

export default App;