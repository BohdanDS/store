import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from "history";
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import configureStore from "./configureStore";
import App from "./App";
export const history = createBrowserHistory(); //либа history
const {store} = configureStore({}, history);
// fetchersInterceptor(store.dispatch); //прокидываем в интерсептор dispatch

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();

