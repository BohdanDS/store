import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {adminRoute} from "./paths";
import Header from "../components/header";

const AdminRoutes = () => {
    return (
        <>
            <Header/>
            <Switch>
                {adminRoute.map(({path, Component}) =>
                    (<Route key={path} path={path} component={Component} strict exact/>)
                )}
                <Redirect to={'/404'}/>
            </Switch>
        </>
    );
};

export default AdminRoutes;