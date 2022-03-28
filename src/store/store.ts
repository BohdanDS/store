import {combineReducers, createStore, compose} from 'redux'
import catalog from "./catalog";
import filter from "./filter";
import cart from "./cart";


export const rootReducer = combineReducers({
        cart: cart,
        catalog: catalog,
        filter: filter
    }
)

const IS_BROWSER = typeof window !== 'undefined';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}
const composeEnhancers = (IS_BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer,composeEnhancers())
export type AppRootStateType = ReturnType<typeof rootReducer>

