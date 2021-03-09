import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Customer from '../containers/Customer';
import Partner from '../containers/Partner';
import About from '../containers/About';
import Splash from '../../src/containers/Splash';

type AcceptedProps = {};

type SwitchState = {};

export default class Controller extends Component<AcceptedProps, SwitchState> {
    constructor(props: AcceptedProps) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <Router>

            <Switch>

            <Route exact path='/Customer'>
            <Customer />
           </Route>

           <Route exact path='/Partner'>
            <Partner />
           </Route>

           <Route exact path='/About'>
            <About />
           </Route>

           <Route exact path='/'>
            <Splash />
           </Route>

            </Switch>
            </Router>
        )
    }
}



