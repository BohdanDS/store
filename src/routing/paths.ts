import {ComponentType} from "react";
import Login from "../modals/auth/login";
import Item from "../pages/item/Item";
import Catalog from "../components/catalog/catalog";
import Cart from "../pages/cart/cart";
import error from "../pages/404/error";
import Error from "../pages/404/error";
import OrderHistory from "../pages/ordersHistory/orderHistory";
import admin from "../pages/admin/admin";

export enum PUBLIC_PATHS {
    APP = '/',
    LOGIN = '/login',
    NOT_FOUND = '/404',
    REGISTRATION = '/registration',
    SEARCH_RESULT = '/result',
    ITEM_PAGE = '/catalog/:id',
}

export enum AUTHORIZED_PATHS {
    APP = '/',
    LOGIN = '/login',
    NOT_FOUND = '/404',
    REGISTRATION = '/registration',
    SEARCH_RESULT = '/result',
    ITEM_PAGE = '/catalog/:id',
    CART = '/cart',
    ORDER_HISTORY = '/my-orders',
}

export enum ADMIN_PATCH {
    APP = '/',
    LOGIN = '/login',
    NOT_FOUND = '/404',
    REGISTRATION = '/registration',
    SEARCH_RESULT = '/result',
    ITEM_PAGE = '/catalog/:id',
    CART = '/cart',
    ADMIN_PAGE = '/admin',
    ADD_ARTICLE = 'cms/add-article',
    ORDER_HISTORY = '/my-orders',
}

export type Routes = {
    path: string
    Component: ComponentType
    // name?: string //опцианально
    showInMenu?: boolean //опцианально
    exact?: boolean
}

// const Home = React.lazy(() => import('../Pages/HomePage/Home'))

export const publicRoute: Routes[] = [
    {path: PUBLIC_PATHS.APP, Component: Catalog, exact: true},
    {path: PUBLIC_PATHS.LOGIN, Component: Login},
    {path: PUBLIC_PATHS.ITEM_PAGE, Component: Item},
    {path: PUBLIC_PATHS.NOT_FOUND, Component: error}
]
export const authorizedRoute: Routes[] = [
    {path: AUTHORIZED_PATHS.APP, Component: Catalog, exact: true},
    {path: AUTHORIZED_PATHS.LOGIN, Component: Login},
    {path: AUTHORIZED_PATHS.ITEM_PAGE, Component: Item},
    {path: AUTHORIZED_PATHS.CART, Component: Cart},
    {path: AUTHORIZED_PATHS.NOT_FOUND, Component: Error},
    {path: AUTHORIZED_PATHS.ORDER_HISTORY, Component: OrderHistory}
]
export const adminRoute: Routes[] = [
    {path: ADMIN_PATCH.APP, Component: Catalog, exact: true},
    {path: ADMIN_PATCH.LOGIN, Component: Login},
    {path: ADMIN_PATCH.ITEM_PAGE, Component: Item},
    {path: ADMIN_PATCH.CART, Component: Cart},
    {path: ADMIN_PATCH.NOT_FOUND, Component: Error},
    {path: ADMIN_PATCH.ORDER_HISTORY, Component: OrderHistory},
    {path: ADMIN_PATCH.ADMIN_PAGE, Component: admin},
    // {path: ADMIN_PATCH.ADD_ARTICLE, Component: Article}
]

