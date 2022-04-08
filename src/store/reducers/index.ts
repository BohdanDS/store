import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import cartReducer from '../reducers/cart/'
import catalogReducer from '../reducers/catalog/'
import filterReducer from '../reducers/filter/'
import ordersReducer from '../reducers/orders/'
import ordersFilterReducer from '../reducers/ordersFilter/'
import categoryReducer from '../reducers/category/'

export const history = createBrowserHistory();

const initial = {};

export function appReducer(state = initial, action: any) {
    return state;
}

const rootReducer = combineReducers({
    app: appReducer,
    cart: cartReducer,
    catalog: catalogReducer,
    filter: filterReducer,
    orders: ordersReducer,
    ordersFilter: ordersFilterReducer,
    category: categoryReducer,
    router: connectRouter(history),
})

export default rootReducer;