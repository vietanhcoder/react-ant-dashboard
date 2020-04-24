import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import DefaultLayout from "./containers/DefaultLayout";
import Login from "./Views/Pages/Login";
import ForgotPassword from "./Views/Pages/ForgetPass";
import Register from "./Views/Pages/Register";

function App() {
  const loading = () => (
    <div className="ant-divider-with-text-center">Loading....</div>
  );
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route
            exact
            path="/register-page"
            name="Register Page"
            component={Register}
          />
          <Route
            exact
            path="/forgot-password"
            name="Login Page"
            component={ForgotPassword}
          />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
