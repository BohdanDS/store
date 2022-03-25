import {combineReducers, createStore} from 'redux'
import {cardReducer} from "./Card-reducer/card-reducer";
import {catalogReducer} from "./Catalog-reducer/catalog-reducer";
import {filterReducer} from "./Filter-reducer/filter-reducer";


export const rootReducer = combineReducers({
        card: cardReducer,
        catalog: catalogReducer,
        filter: filterReducer
    }
)

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
