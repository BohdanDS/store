import {combineReducers, createStore} from 'redux'
import {catalogReducer} from "./catalog-reducer/catalog-reducer";
import {filterReducer} from "./filter-reducer/filter-reducer";
import {cartReducer} from "./cart-reducer/cart-reducer";


export const rootReducer = combineReducers({
        cart: cartReducer,
        catalog: catalogReducer,
        filter: filterReducer
    }
)

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
