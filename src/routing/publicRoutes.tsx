import React from 'react';
import Header from "../components/header";
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoute} from "./paths";

const PublicRoutes = () => {
    return (
        <>
            <Header/>
            <Switch>
                {publicRoute.map(({path, Component}) =>
                    (<Route key={path} path={path} component={Component} strict exact/>)
                )}
                <Redirect to={'/404'}/>
            </Switch>
        </>
    );
};

export default PublicRoutes;