import React, {Suspense} from 'react';
import './App.less';
import {BrowserRouter, Redirect, Route, Switch,} from "react-router-dom";
import {pageRoutes} from "./Routing/paths";
import {Spin} from "antd";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spin/>}>
                <Header/>
                <Catalog/>
                <Switch>
                    {pageRoutes.map(({path, Component}) =>
                        (<Route key={path} path={path} component={Component} strict exact/>)
                    )}
                    <Redirect to={'/'}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
