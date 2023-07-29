import React from 'react';
import './index.scss'
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div className={'App'}>
            <Routes>
                <Route path={"/"} />
                <Route path={"/about"} />
            </Routes>
        </div>
    );
};

export default App;