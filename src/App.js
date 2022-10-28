import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import DoctorLogin from './pages/DoctorLogin';
import Register from './pages/Register';
import Main from './pages/Main';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import UserInfo from './보관/UserInfo';
import Header from "./components/Header";
import AdminLogin from "./pages/AdminLogin";
import NoticesIndex from "./pages/NoticesIndex";

window.store = store;

const App = () => {

	return (
		<Provider store={store}>

			<BrowserRouter>
				<Header />

				<Switch>
					<AuthRoute exact path={"/"} component={Main} />
					<AuthRoute exact path={"/userInfo"} component={UserInfo} />
					<AuthRoute exact path={"/admin/notices"} component={NoticesIndex} />
					<Route exact path={"/login"} component={DoctorLogin} />
					<Route exact path={"/admin/login"} component={AdminLogin} />
					<Route exact path={"/register"} component={Register} />
				</Switch>
			</BrowserRouter>

		</Provider>
	);
};

export default App;
