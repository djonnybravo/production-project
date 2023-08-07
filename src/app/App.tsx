import React, {Suspense} from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";

const Component = () => {

    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? 'en' : 'ru')
    }
    return <div>
        <button onClick={toggle}>{t("Перевести")}</button>
        <h1>{t('Тестовый пример')}</h1>

    </div>
}

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback='' >
                <Component/>
            <Navbar/>
            <div className={'content-page'}>
                <Sidebar/>
                <AppRouter/>

            </div>
            </Suspense>

        </div>
    );
};

export default App;