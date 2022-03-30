import React from 'react';
import './App.less';
import PublicRoutes from "./routing/publicRoutes";
import AuthorizedRoutes from "./routing/authorizedRoutes";

function App() {

    const authorized = true
    return authorized ? <AuthorizedRoutes/> : <PublicRoutes/>

}

export default App;
