import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    // В РЕАЛЬНЫХ ПРОЕКТАХ, ТАК НЕ ДЕЛАЕМ. СДЕЛАНО ДЛЯ ДЕМОНСТРАЦИИ ЗАГРУЗКИ ЧАНКОВ
    setTimeout(() => res(import('./AboutPage')), 1500)
}));