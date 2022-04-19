import React from 'react';
import './App.less';
import AdminRouting from "./routing/adminRouting";
import PublicRoutes from "./routing/publicRoutes";
import {useSelector} from "react-redux";
import {TApplicationState} from "./store/aplication-state";

function App() {
    const userRole = useSelector<TApplicationState, string|null>(state => state.login.user.role)
    return <AdminRouting/>

}

export default App;
