import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";
import NoMatch from "./pages/nomatch";
import Login from "./pages/login";
import Home from "./pages/home";
import Search from "./pages/search";
import Article from "./pages/article";
import RichText from "./pages/richtext";


class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Redirect exact path="/" to="/index" />
                        <Route path="/login" component={Login} />
                        <Route path="/index" component={Home} />
                        <Route path="/search" component={Search} />
                        <Route path="/article/:id" component={Article} />
                        <Route path="/richtext/:id" component={RichText} />
                        <Route path="/richtext" component={RichText} />
                        <Route component={NoMatch}></Route>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}

export default Router;