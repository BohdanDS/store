import {ComponentType} from "react";
import Login from "../modals/login/login";
import Item from "../pages/item/Item";
import Catalog from "../components/catalog/catalog";
import Cart from "../pages/cart/cart";
import error from "../pages/404/error";

export enum PUBLIC_PATHS {
    APP = '/',
    LOGIN = '/login',
    NOT_FOUND = '/404',
    REGISTRATION = '/registration',
    SEARCH_RESULT = '/result',
    ITEM_PAGE = '/catalog/:id',
    CART = '/cart'
}

export enum AUTHORIZED_PATHS {
    APP = '/',
    LOGIN = '/login',
    NOT_FOUND = '/404',
    REGISTRATION = '/registration',
    SEARCH_RESULT = '/result',
    ITEM_PAGE = '/catalog/:id',
    CART = '/cart'
}

export enum ADMIN_PATCH {
    APP = '/',
    LOGIN = '/login',
    NOT_FOUND = '/404',
    REGISTRATION = '/registration',
    SEARCH_RESULT = '/result',
    ITEM_PAGE = '/catalog/:id',
    CART = '/cart',
    ADMIN_PAGE= '/cms/edit'
}

export type Routes = {
    path: string
    Component: ComponentType
    // name?: string //опцианально
    showInMenu?: boolean //опцианально
    // exact?: boolean
}

// const Home = React.lazy(() => import('../Pages/HomePage/Home'))

export const publicRoute: Routes[] = [
    {path: PUBLIC_PATHS.APP, Component: Catalog},
    {path: PUBLIC_PATHS.LOGIN, Component: Login},
    {path: PUBLIC_PATHS.ITEM_PAGE, Component: Item},
    // {path: PUBLIC_PATHS.CART, Component: Cart},
    {path: PUBLIC_PATHS.NOT_FOUND, Component: error}
]
export const authorizedRoute: Routes[] = [
    {path: PUBLIC_PATHS.APP, Component: Catalog},
    {path: PUBLIC_PATHS.LOGIN, Component: Login},
    {path: PUBLIC_PATHS.ITEM_PAGE, Component: Item},
    {path: PUBLIC_PATHS.CART, Component: Cart},
    {path: PUBLIC_PATHS.NOT_FOUND, Component: error}
]
export const adminRoute: Routes[] = [
    {path: PUBLIC_PATHS.APP, Component: Catalog},
    {path: PUBLIC_PATHS.LOGIN, Component: Login},
    {path: PUBLIC_PATHS.ITEM_PAGE, Component: Item},
    {path: PUBLIC_PATHS.CART, Component: Cart},
    {path: PUBLIC_PATHS.NOT_FOUND, Component: error}
]
