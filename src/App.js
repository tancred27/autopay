import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from "./components/auth/LoginUser";
import AuthState from "./context/auth/authState";
import Records from "./components/list/Records";

const App = () => {
	return (
		<AuthState>
      <Switch>
        <Route exact path="/" component={Records} />
        <Route exact path="/login" component={Login} />
      </Switch>
		</AuthState>
	);
}

export default App;