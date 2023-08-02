import {RouteProps} from "react-router-dom";
import MainPage from "pages/MainPage";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}


export const RoutePath: Record<AppRoutes, string> ={
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.MAIN]: "/",
}



export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    }
}