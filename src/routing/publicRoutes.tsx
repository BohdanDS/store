import React, {Suspense} from 'react';
import {Spin} from "antd";
import Header from "../components/header";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {publicRoute} from "./paths";

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spin/>}>
                <Header/>
                <Switch>
                    {publicRoute.map(({path, Component}) =>
                        (<Route key={path} path={path} component={Component} strict exact/>)
                    )}
                    <Redirect to={'/404'}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default PublicRoutes;