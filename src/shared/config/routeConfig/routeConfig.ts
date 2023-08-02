export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'abot'
}


export const RoutePath: Record<AppRoutes, string> ={
    [AppRoutes.ABOUT]: "/",
    [AppRoutes.MAIN]: "/about",
}