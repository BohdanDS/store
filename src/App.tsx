import React from 'react';
import './App.less';
import {useSelector} from 'react-redux';
import AdminRouting from './routing/adminRouting';
import PublicRoutes from './routing/publicRoutes';
import {USER_ROLES} from './models/feels';
import AuthorizedUserRoutes from './routing/authorizedRoutes';
import {SelectRole} from "./store/reducers/auth/selector";

function App() {
	const userRole = useSelector(SelectRole())
	const checkRouting = (userRole: string | null) => {
		switch (userRole) {
			case USER_ROLES.ADMIN_ROLE: {
				return <AdminRouting/>;
			}
			case USER_ROLES.USER_ROLE: {
				return <AuthorizedUserRoutes/>;
			}
			default:
				return <PublicRoutes/>;
		}
	};
	return (
		// checkRouting(userRole)
		<AdminRouting/>
	);
}

export default App;
