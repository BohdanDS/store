import React from 'react';
import './App.less';
import PublicRoutes from "./routing/publicRoutes";
import AdminRouting from "./routing/adminRouting";

function App() {

    const authorized = true
    return authorized ? <AdminRouting/> : <PublicRoutes/>

}

export default App;
