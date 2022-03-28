import {combineReducers, createStore} from 'redux'
import catalog from "./catalog";
import filter from "./filter";
import cart from "./cart";


export const rootReducer = combineReducers({
        cart: cart,
        catalog: catalog,
        filter: filter
    }
)

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
