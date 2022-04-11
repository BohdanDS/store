import {TCartState} from "./reducers/cart";
import {TCatalogState} from "./reducers/catalog";
import {TCategoryState} from "./reducers/category";
import {TFilterState} from "../models/feels";
import {TOrdersFilterState} from "./reducers/ordersFilter";
import {TOrdersState} from "./reducers/orders";
import { RouterState } from "connected-react-router";

export type TApplicationState = Readonly<{
    router: RouterState //для роутинга
    //ниже пример изолированых хранилищ
    cart: TCartState,
    catalog: TCatalogState,
    category: TCategoryState,
    filter: TFilterState,
    orders: TOrdersState,
    ordersFilter: TOrdersFilterState
}>