import {combineReducers, compose, createStore} from 'redux'
import catalog from "./catalog";
import filter from "./filter";
import cart from "./cart";
import order from "./orders";
// import article from './article'
import orderFilter from './ordersFilter'


export const rootReducer = combineReducers({
        cart: cart,
        catalog: catalog,
        filter: filter,
        order: order,
        // article: article,
        orderFilter: orderFilter,
    }
)

const IS_BROWSER = typeof window !== 'undefined';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}
const composeEnhancers = (IS_BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers())
export type AppRootStateType = ReturnType<typeof rootReducer>

