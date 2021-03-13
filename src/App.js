import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from "./components/auth/LoginUser.jsx";
import AuthState from "./context/auth/authState";

const App = () => {
	return (
		<AuthState>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
      </Switch>
		</AuthState>
	);
}

export default App;