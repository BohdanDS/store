import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from "history";
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import configureStore from "./configureStore";
import AdminRoutes from "./routing/adminRouting";
import './App.less';


export const history = createBrowserHistory(); //либа history
const {store} = configureStore({}, history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AdminRoutes/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();