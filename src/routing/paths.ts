import React, {ComponentType} from "react";
import Login from "../pages/login/login";
import Item from "../pages/item/Item";
import Catalog from "../components/catalog/catalog";
import Cart from "../pages/cart/cart";

export enum PUBLIC_PATHS {
    APP = '/',
    LOGIN = '/login',
    NOT_FOUND = '/404',
    REGISTRATION = '/registration',
    SEARCH_RESULT= '/result',
    ITEM_PAGE = '/catalog/:id',
    CART='/cart'

}

export type Routes = {
    path: string
    Component: ComponentType
    // name?: string //опцианально
    showInMenu?: boolean //опцианально
    // exact?: boolean
}

// const Home = React.lazy(() => import('../Pages/HomePage/Home'))

export const pageRoutes:Routes[] = [
    {path: PUBLIC_PATHS.APP, Component: Catalog},
    {path: PUBLIC_PATHS.LOGIN, Component: Login},
    // {path: PUBLIC_PATHS.REGISTRATION, Component: Registrations},
    // {path: PUBLIC_PATHS.NOT_FOUND, Component: NotFound},
    // {path: PUBLIC_PATHS.SEARCH_RESULT, Component: SearchResult},
    {path: PUBLIC_PATHS.ITEM_PAGE, Component:Item},
    {path: PUBLIC_PATHS.CART, Component:Cart}
]