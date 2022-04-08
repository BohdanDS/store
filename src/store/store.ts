import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';
import reducer, {history} from './reducers';
import {routerMiddleware} from "connected-react-router";


// export const rootReducer = combineReducers({
//         cart: cart,
//         catalog: catalog,
//         filter: filter,
//         order: order,
//         // article: article,
//         orderFilter: orderFilter,
//     }
// )

const IS_BROWSER = typeof window !== 'undefined';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}
const composeEnhancers = (IS_BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, composeEnhancers(applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
)))
export type AppRootStateType = ReturnType<typeof reducer>

