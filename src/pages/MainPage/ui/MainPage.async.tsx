import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((res) => {
    // @ts-ignore
    // В РЕАЛЬНЫХ ПРОЕКТАХ, ТАК НЕ ДЕЛАЕМ. СДЕЛАНО ДЛЯ ДЕМОНСТРАЦИИ ЗАГРУЗКИ ЧАНКОВ
    setTimeout(() => res(import('./MainPage')), 1500);
}));
