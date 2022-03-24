import React, {ComponentType} from "react";
import Login from "../Pages/Login/Login";
import Registrations from "../Pages/Registrations/Registrations";
import NotFound from "../Pages/NotFoundPage/NotFound";
import SearchResult from "../Pages/SearchResultPage/SearchResult";

export enum PUBLIC_PATHS {
    APP = '/',
    LOGIN = '/login',
    NOT_FOUND = '/404',
    REGISTRATION = '/registration',
    SEARCH_RESULT= '/result'
}

export type Routes = {
    path: string
    Component: ComponentType
    // name?: string //опцианально
    showInMenu?: boolean //опцианально
    // exact?: boolean
}

const Home = React.lazy(() => import('../Pages/HomePage/Home'))

export const pageRoutes:Routes[] = [
    {path: PUBLIC_PATHS.APP, Component: Home},
    {path: PUBLIC_PATHS.LOGIN, Component: Login},
    {path: PUBLIC_PATHS.REGISTRATION, Component: Registrations},
    {path: PUBLIC_PATHS.NOT_FOUND, Component: NotFound},
    {path: PUBLIC_PATHS.SEARCH_RESULT, Component: SearchResult},
]