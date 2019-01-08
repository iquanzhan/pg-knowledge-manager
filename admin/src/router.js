import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NoMatch from "./pages/nomatch";
import Login from "./pages/login";
import Admin from "./admin";


class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    } />
                    <Route path="/order/detail" component={Login} />
                </App>
            </HashRouter>
        );
    }
}

export default Router;