import {combineReducers, createStore} from 'redux'
import {cardReducer} from "./card-reducer/card-reducer";
import {catalogReducer} from "./catalog-reducer/catalog-reducer";
import {filterReducer} from "./filter-reducer/filter-reducer";


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
