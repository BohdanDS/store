import React, {Suspense} from 'react';
import './App.less';
import {BrowserRouter, Redirect, Route, Switch,} from "react-router-dom";
import {pageRoutes} from "./routing/paths";
import {Spin} from "antd";
import Header from "./components/header/header";
import Catalog from "./components/catalog/catalog";
import Item from "./Pages/item/Item";

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spin/>}>
                <Header/>
                <Switch>
                    {/*<Route path='path="/catalog/:id' component={Item} strict exact>{Item}</Route>*/}
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
