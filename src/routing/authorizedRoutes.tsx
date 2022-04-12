import React from 'react';
import Header from "../components/header";
import {Redirect, Route, Switch} from "react-router-dom";
import {authorizedRoute} from "./paths";

const AuthorizedUserRoutes = () => {
    return (
        <>
            <Header/>
            <Switch>
                {authorizedRoute.map(({path, Component}) =>
                    (<Route key={path} path={path} component={Component} strict exact/>)
                )}
                <Redirect to={'/404'}/>
            </Switch>
        </>

    );
};

export default AuthorizedUserRoutes;