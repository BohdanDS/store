import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from "history";
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import configureStore from "./configureStore";
import './App.less';
import App from "./App";
import Notification from "./components/notification/notification";
import Modals from "./modals/modals";


export const history = createBrowserHistory(); //либа history
const {store} = configureStore({}, history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
            <Notification/>
            <Modals/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();