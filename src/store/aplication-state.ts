import {TCartState} from "./reducers/cart";
import {TCatalogState} from "./reducers/catalog";
import {TFilterState} from "../models/feels";
import {TOrdersFilterState} from "./reducers/ordersFilter";
import {TOrdersState} from "./reducers/orders";
import {RouterState} from "connected-react-router";
import {TAuthState} from "./reducers/auth";
import {TNotificationState} from "./reducers/notification";
import {TModalState} from "./reducers/modals";
import {ICategory} from "../models/category";

export type TApplicationState = Readonly<{
    router: RouterState,
    cart: TCartState,
    catalog: TCatalogState,
    category: ICategory[],
    filter: TFilterState,
    orders: TOrdersState,
    ordersFilter: TOrdersFilterState,
    login: TAuthState,
    notification: TNotificationState,
    modals: TModalState,
}>