import {TApplicationState} from "./aplication-state";
import {connectRouter} from "connected-react-router";
import {History} from 'history';
import {combineReducers} from 'redux';
import cartReducer from './reducers/cart'
import catalogReducer from './reducers/catalog'
import filterReducer from './reducers/filter'
import ordersReducer from './reducers/orders'
import ordersFilterReducer from './reducers/ordersFilter'
import categoryReducer from './reducers/category'
import loginReducer from './reducers/auth'
import notificationReducer from './reducers/notification'
import modalReducer from './reducers/modals'


const store = (history: History) => combineReducers<TApplicationState>({
    router: connectRouter(history),
    cart: cartReducer,
    catalog: catalogReducer,
    filter: filterReducer,
    orders: ordersReducer,
    ordersFilter: ordersFilterReducer,
    category: categoryReducer,
    login: loginReducer,
    notification: notificationReducer,
    modals: modalReducer,
});

export default store;