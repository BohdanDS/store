import React from 'react';
import './App.less';
import AdminRouting from "./routing/adminRouting";
import PublicRoutes from "./routing/publicRoutes";

function App() {
    //
    // const authorized = true
    // return authorized ? <AdminRouting/> : <PublicRoutes/>
    return <PublicRoutes/>

}

export default App;
