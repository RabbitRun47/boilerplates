import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import History from './Navigation';
import { Counter } from "./Pages/Counter";

export default class Routes extends Component {
    render() {
        return (
            <Router history={History}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Counter" exact component={Counter} />
                </Switch>
            </Router>
        )
    }
}