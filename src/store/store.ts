import {combineReducers, createStore} from 'redux'
import {searchReducer} from "./search-reducer";
import {cardReducer} from "./Card-reducer/card-reducer";
import {catalogReducer} from "./Catalog-reducer/catalog-reducer";


const rootReducer = combineReducers({
        search: searchReducer,
        card: cardReducer,
        catalog: catalogReducer
    }
)

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
