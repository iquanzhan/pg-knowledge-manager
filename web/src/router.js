import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import NoMatch from "./pages/nomatch";
import Login from "./pages/login";
import Home from "./pages/home";


class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Redirect exact path="/" to="/index" />
                        <Route path="/login" component={Login} />
                        <Route path="/index" component={Home} />
                        <Route component={NoMatch}></Route>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}

export default Router;