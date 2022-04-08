import {combineReducers} from "redux";
import {TApplicationState} from "./aplication-state";
import {connectRouter} from "connected-react-router";
import cartReducer from "./reducers/cart";
import catalogReducer from "./reducers/catalog";
import filterReducer from "./reducers/filter";
import ordersReducer from "./reducers/orders";
import ordersFilterReducer from "./reducers/ordersFilter";
import categoryReducer from "./reducers/category";
import { History } from 'history';


const store = (history: History) => combineReducers<TApplicationState>({
    router: connectRouter(history),
    cart: cartReducer,
    catalog: catalogReducer,
    filter: filterReducer,
    orders: ordersReducer,
    ordersFilter: ordersFilterReducer,
    category: categoryReducer,
});

export default store;