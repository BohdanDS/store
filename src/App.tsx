import React from 'react';
import './App.less';
import AdminRouting from "./routing/adminRouting";

function App() {
    //
    // const authorized = true
    // return authorized ? <AdminRouting/> : <PublicRoutes/>
    return <AdminRouting/>
    // return <Menu/>

}

export default App;
